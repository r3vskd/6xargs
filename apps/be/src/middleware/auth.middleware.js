import jwt from 'jsonwebtoken';
import { prisma } from '../config/database.js';
import { config } from '../config/database.js';
import { asyncHandler } from './error.middleware.js';
import { logger } from '../utils/logger.js';

/**
 * Authentication middleware
 * Verifies JWT token and adds user info to request
 */
export const authMiddleware = asyncHandler(async (req, res, next) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({
      error: 'No token provided',
      message: 'Please provide a valid authentication token'
    });
  }

  const token = authHeader.substring(7); // Remove 'Bearer ' prefix

  try {
    // Verify token
    const decoded = jwt.verify(token, config.jwt.secret);
    
    // Check if user still exists and is active
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: {
        id: true,
        email: true,
        username: true,
        role: true,
        isActive: true
      }
    });

    if (!user) {
      return res.status(401).json({
        error: 'User not found',
        message: 'The user associated with this token no longer exists'
      });
    }

    if (!user.isActive) {
      return res.status(401).json({
        error: 'Account disabled',
        message: 'Your account has been disabled. Please contact support.'
      });
    }

    // Add user info to request
    req.user = {
      userId: user.id,
      email: user.email,
      username: user.username,
      role: user.role
    };

    next();
  } catch (error) {
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({
        error: 'Invalid token',
        message: 'Please provide a valid authentication token'
      });
    }
    
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({
        error: 'Token expired',
        message: 'Your session has expired, please login again'
      });
    }

    logger.error('Auth middleware error:', error);
    return res.status(500).json({
      error: 'Authentication error',
      message: 'An error occurred during authentication'
    });
  }
});

/**
 * Role-based authorization middleware
 * @param {string[]} allowedRoles - Array of allowed roles
 */
export const requireRole = (allowedRoles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        error: 'Authentication required',
        message: 'Please authenticate first'
      });
    }

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        error: 'Insufficient permissions',
        message: `This action requires one of the following roles: ${allowedRoles.join(', ')}`
      });
    }

    next();
  };
};

/**
 * Optional authentication middleware
 * Adds user info to request if token is provided, but doesn't require it
 */
export const optionalAuth = asyncHandler(async (req, res, next) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return next(); // Continue without authentication
  }

  const token = authHeader.substring(7);

  try {
    const decoded = jwt.verify(token, config.jwt.secret);
    
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: {
        id: true,
        email: true,
        username: true,
        role: true,
        isActive: true
      }
    });

    if (user && user.isActive) {
      req.user = {
        userId: user.id,
        email: user.email,
        username: user.username,
        role: user.role
      };
    }
  } catch (error) {
    // Ignore token errors in optional auth
    logger.debug('Optional auth token error:', error.message);
  }

  next();
});

/**
 * Admin only middleware
 */
export const requireAdmin = [authMiddleware, requireRole(['ADMIN'])];

/**
 * Company admin or admin middleware
 */
export const requireCompanyAdmin = [authMiddleware, requireRole(['COMPANY_ADMIN', 'ADMIN'])];

/**
 * Hacker or admin middleware
 */
export const requireHacker = [authMiddleware, requireRole(['HACKER', 'ADMIN'])];

/**
 * Admin authentication middleware
 * Alias for requireAdmin for backward compatibility
 */
export const authenticateAdmin = requireAdmin;

/**
 * API Key authentication middleware
 */
export const authenticateApiKey = asyncHandler(async (req, res, next) => {
  const apiKey = req.headers['x-api-key'] || req.headers['authorization']?.replace('Bearer ', '');
  
  if (!apiKey) {
    return res.status(401).json({
      error: 'API Key required',
      message: 'Please provide a valid API key'
    });
  }

  try {
    // Find client by API key
    const client = await prisma.client.findFirst({
      where: {
        apiKeys: {
          some: {
            key: apiKey,
            isActive: true,
            revokedAt: null
          }
        },
        status: 'ACTIVE'
      },
      include: {
        apiKeys: {
          where: {
            key: apiKey,
            isActive: true
          }
        }
      }
    });

    if (!client) {
      logger.security('Invalid API key attempt', { apiKey: apiKey.substring(0, 10) + '...' });
      return res.status(401).json({
        error: 'Invalid API key',
        message: 'The provided API key is invalid or has been revoked'
      });
    }

    // Update last used timestamp
    await prisma.apiKey.update({
      where: { id: client.apiKeys[0].id },
      data: { lastUsedAt: new Date() }
    });

    // Add client info to request
    req.client = client;
    req.apiKey = client.apiKeys[0];
    
    logger.info(`API request from client: ${client.companyName}`);
    next();
  } catch (error) {
    logger.error('Error in API key authentication:', error);
    return res.status(500).json({
      error: 'Authentication error',
      message: 'An error occurred during authentication'
    });
  }
});

/**
 * Client authentication middleware (for client dashboard)
 */
export const authenticateClient = asyncHandler(async (req, res, next) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({
      error: 'No token provided',
      message: 'Please provide a valid authentication token'
    });
  }

  const token = authHeader.substring(7);

  try {
    const decoded = jwt.verify(token, config.jwt.secret);
    
    const client = await prisma.client.findUnique({
      where: { id: decoded.clientId },
      select: {
        id: true,
        email: true,
        companyName: true,
        status: true,
        plan: true
      }
    });

    if (!client) {
      return res.status(401).json({
        error: 'Client not found',
        message: 'The client associated with this token no longer exists'
      });
    }

    if (client.status !== 'ACTIVE') {
      return res.status(401).json({
        error: 'Account suspended',
        message: 'Your account has been suspended. Please contact support.'
      });
    }

    req.client = client;
    next();
  } catch (error) {
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({
        error: 'Invalid token',
        message: 'The provided token is invalid'
      });
    }
    
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({
        error: 'Token expired',
        message: 'Your session has expired. Please log in again.'
      });
    }

    logger.error('Error in client authentication:', error);
     return res.status(500).json({
       error: 'Authentication error',
       message: 'An error occurred during authentication'
     });
   }
 });
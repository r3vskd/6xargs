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
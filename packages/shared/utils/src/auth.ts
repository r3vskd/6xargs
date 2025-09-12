import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import type { User, UserRole } from '@6xargs/shared-types';

// Password utilities
export const hashPassword = async (password: string): Promise<string> => {
  const saltRounds = 12;
  return bcrypt.hash(password, saltRounds);
};

export const verifyPassword = async (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  return bcrypt.compare(password, hashedPassword);
};

export const generateSecurePassword = (length: number = 16): string => {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
  let password = '';
  
  // Ensure at least one character from each category
  const categories = [
    'abcdefghijklmnopqrstuvwxyz',
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    '0123456789',
    '!@#$%^&*'
  ];
  
  // Add one character from each category
  categories.forEach(category => {
    password += category[Math.floor(Math.random() * category.length)];
  });
  
  // Fill the rest randomly
  for (let i = password.length; i < length; i++) {
    password += charset[Math.floor(Math.random() * charset.length)];
  }
  
  // Shuffle the password
  return password.split('').sort(() => Math.random() - 0.5).join('');
};

export const validatePasswordStrength = (password: string): {
  isValid: boolean;
  score: number;
  feedback: string[];
} => {
  const feedback: string[] = [];
  let score = 0;
  
  if (password.length < 8) {
    feedback.push('Password must be at least 8 characters long');
  } else {
    score += 1;
  }
  
  if (!/[a-z]/.test(password)) {
    feedback.push('Password must contain at least one lowercase letter');
  } else {
    score += 1;
  }
  
  if (!/[A-Z]/.test(password)) {
    feedback.push('Password must contain at least one uppercase letter');
  } else {
    score += 1;
  }
  
  if (!/\d/.test(password)) {
    feedback.push('Password must contain at least one number');
  } else {
    score += 1;
  }
  
  if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
    feedback.push('Password must contain at least one special character');
  } else {
    score += 1;
  }
  
  if (password.length >= 12) {
    score += 1;
  }
  
  return {
    isValid: score >= 4,
    score,
    feedback
  };
};

// JWT utilities
export interface JWTPayload {
  userId: string;
  email: string;
  role: UserRole;
  companyId?: string;
  iat?: number;
  exp?: number;
}

export const generateJWT = (
  payload: Omit<JWTPayload, 'iat' | 'exp'>,
  secret: string,
  expiresIn: string = '24h'
): string => {
  return jwt.sign(payload, secret, { expiresIn });
};

export const verifyJWT = (
  token: string,
  secret: string
): JWTPayload | null => {
  try {
    return jwt.verify(token, secret) as JWTPayload;
  } catch (error) {
    return null;
  }
};

export const decodeJWT = (token: string): JWTPayload | null => {
  try {
    return jwt.decode(token) as JWTPayload;
  } catch (error) {
    return null;
  }
};

export const isJWTExpired = (token: string): boolean => {
  const decoded = decodeJWT(token);
  if (!decoded || !decoded.exp) return true;
  
  return Date.now() >= decoded.exp * 1000;
};

// Refresh token utilities
export const generateRefreshToken = (): string => {
  return crypto.randomBytes(64).toString('hex');
};

export const generateTokenPair = (
  payload: Omit<JWTPayload, 'iat' | 'exp'>,
  secret: string,
  accessTokenExpiry: string = '15m',
  refreshTokenExpiry: string = '7d'
): {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
} => {
  const accessToken = generateJWT(payload, secret, accessTokenExpiry);
  const refreshToken = generateJWT(
    { ...payload, type: 'refresh' },
    secret,
    refreshTokenExpiry
  );
  
  // Calculate expiry time in seconds
  const expiresIn = accessTokenExpiry.includes('m') 
    ? parseInt(accessTokenExpiry) * 60
    : accessTokenExpiry.includes('h')
    ? parseInt(accessTokenExpiry) * 3600
    : parseInt(accessTokenExpiry) * 86400;
  
  return {
    accessToken,
    refreshToken,
    expiresIn
  };
};

// API Key utilities
export const generateAPIKey = (prefix: string = 'sk'): string => {
  const randomBytes = crypto.randomBytes(32).toString('hex');
  return `${prefix}_${randomBytes}`;
};

export const hashAPIKey = (apiKey: string): string => {
  return crypto.createHash('sha256').update(apiKey).digest('hex');
};

export const verifyAPIKey = (apiKey: string, hashedKey: string): boolean => {
  const hashedInput = hashAPIKey(apiKey);
  return crypto.timingSafeEqual(
    Buffer.from(hashedInput, 'hex'),
    Buffer.from(hashedKey, 'hex')
  );
};

// Session utilities
export const generateSessionId = (): string => {
  return crypto.randomBytes(32).toString('hex');
};

export const generateCSRFToken = (): string => {
  return crypto.randomBytes(32).toString('base64url');
};

// OTP utilities
export const generateOTP = (length: number = 6): string => {
  const digits = '0123456789';
  let otp = '';
  
  for (let i = 0; i < length; i++) {
    otp += digits[Math.floor(Math.random() * digits.length)];
  }
  
  return otp;
};

export const generateTOTP = (
  secret: string,
  timeStep: number = 30,
  digits: number = 6
): string => {
  const time = Math.floor(Date.now() / 1000 / timeStep);
  const timeBuffer = Buffer.alloc(8);
  timeBuffer.writeUInt32BE(time, 4);
  
  const hmac = crypto.createHmac('sha1', Buffer.from(secret, 'base32'));
  hmac.update(timeBuffer);
  const hash = hmac.digest();
  
  const offset = hash[hash.length - 1] & 0xf;
  const code = (
    ((hash[offset] & 0x7f) << 24) |
    ((hash[offset + 1] & 0xff) << 16) |
    ((hash[offset + 2] & 0xff) << 8) |
    (hash[offset + 3] & 0xff)
  ) % Math.pow(10, digits);
  
  return code.toString().padStart(digits, '0');
};

// Permission utilities
export const hasPermission = (
  userRole: UserRole,
  requiredRole: UserRole
): boolean => {
  const roleHierarchy: Record<UserRole, number> = {
    'super_admin': 5,
    'admin': 4,
    'company_admin': 3,
    'security_analyst': 2,
    'hacker': 1
  };
  
  return roleHierarchy[userRole] >= roleHierarchy[requiredRole];
};

export const canAccessResource = (
  user: User,
  resourceOwnerId?: string,
  resourceCompanyId?: string
): boolean => {
  // Super admin can access everything
  if (user.role === 'super_admin') return true;
  
  // Admin can access everything
  if (user.role === 'admin') return true;
  
  // Company admin can access resources in their company
  if (user.role === 'company_admin' && user.companyId === resourceCompanyId) {
    return true;
  }
  
  // Users can access their own resources
  if (resourceOwnerId === user.id) return true;
  
  // Security analysts can access resources in their company
  if (
    user.role === 'security_analyst' &&
    user.companyId === resourceCompanyId
  ) {
    return true;
  }
  
  return false;
};

// Rate limiting helpers
export const generateRateLimitKey = (
  identifier: string,
  action: string,
  window: string = '1h'
): string => {
  const timestamp = Math.floor(Date.now() / getWindowMs(window));
  return `rate_limit:${action}:${identifier}:${timestamp}`;
};

const getWindowMs = (window: string): number => {
  const unit = window.slice(-1);
  const value = parseInt(window.slice(0, -1));
  
  switch (unit) {
    case 's': return value * 1000;
    case 'm': return value * 60 * 1000;
    case 'h': return value * 60 * 60 * 1000;
    case 'd': return value * 24 * 60 * 60 * 1000;
    default: return value;
  }
};

// Security headers
export const getSecurityHeaders = (): Record<string, string> => {
  return {
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' https:; connect-src 'self' https:; frame-ancestors 'none';"
  };
};

// Input sanitization
export const sanitizeInput = (input: string): string => {
  return input
    .replace(/[<>"'&]/g, (match) => {
      const entityMap: Record<string, string> = {
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        '&': '&amp;'
      };
      return entityMap[match];
    })
    .trim();
};

export const sanitizeEmail = (email: string): string => {
  return email.toLowerCase().trim();
};

export const sanitizeUsername = (username: string): string => {
  return username.toLowerCase().replace(/[^a-z0-9_-]/g, '').trim();
};
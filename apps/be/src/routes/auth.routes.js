import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { prisma } from '../config/database.js';
import { config } from '../config/database.js';
import { asyncHandler } from '../middleware/error.middleware.js';
import { logger } from '../utils/logger.js';
import { validateEmail, validatePassword, validateUsername } from '../utils/validation.js';

const router = express.Router();

// Register endpoint
router.post('/register', asyncHandler(async (req, res) => {
  const { email, username, password, firstName, lastName, companyName, role = 'HACKER' } = req.body;

  // Validation
  if (!validateEmail(email)) {
    return res.status(400).json({
      error: 'Invalid email format',
      message: 'Please provide a valid email address'
    });
  }

  if (!validateUsername(username)) {
    return res.status(400).json({
      error: 'Invalid username',
      message: 'Username must be between 3 and 20 characters'
    });
  }

  if (!validatePassword(password)) {
    return res.status(400).json({
      error: 'Invalid password',
      message: 'Password must be at least 12 characters long'
    });
  }

  // Check if user already exists
  const existingUser = await prisma.user.findFirst({
    where: {
      OR: [
        { email },
        { username }
      ]
    }
  });

  if (existingUser) {
    return res.status(409).json({
      error: 'User already exists',
      message: 'A user with this email or username already exists'
    });
  }

  // Hash password
  const saltRounds = 12;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  // Create user
  const user = await prisma.user.create({
    data: {
      email,
      username,
      password: hashedPassword,
      firstName,
      lastName,
      companyName,
      role: role.toUpperCase(),
      isActive: true
    },
    select: {
      id: true,
      email: true,
      username: true,
      firstName: true,
      lastName: true,
      companyName: true,
      role: true,
      createdAt: true
    }
  });

  // Generate JWT token
  const token = jwt.sign(
    { userId: user.id, email: user.email, role: user.role },
    config.jwt.secret,
    { expiresIn: config.jwt.expiresIn }
  );

  logger.info(`New user registered: ${user.email}`);

  res.status(201).json({
    message: 'Registration successful!',
    user,
    token
  });
}));

// Login endpoint
router.post('/login', asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      error: 'Missing credentials',
      message: 'Username and password are required'
    });
  }

  // Find user by username or email
  const user = await prisma.user.findFirst({
    where: {
      OR: [
        { username },
        { email: username }
      ]
    }
  });

  if (!user) {
    return res.status(401).json({
      error: 'Invalid credentials',
      message: 'Invalid username or password'
    });
  }

  // Check if user is active
  if (!user.isActive) {
    return res.status(401).json({
      error: 'Account disabled',
      message: 'Your account has been disabled. Please contact support.'
    });
  }

  // Verify password
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(401).json({
      error: 'Invalid credentials',
      message: 'Invalid username or password'
    });
  }

  // Generate JWT token
  const token = jwt.sign(
    { userId: user.id, email: user.email, role: user.role },
    config.jwt.secret,
    { expiresIn: config.jwt.expiresIn }
  );

  // Update last login
  await prisma.user.update({
    where: { id: user.id },
    data: { lastLogin: new Date() }
  });

  logger.info(`User logged in: ${user.email}`);

  res.status(200).json({
    message: 'Login successful!',
    user: {
      id: user.id,
      email: user.email,
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      companyName: user.companyName,
      role: user.role
    },
    token
  });
}));

// Logout endpoint
router.post('/logout', asyncHandler(async (req, res) => {
  // In a stateless JWT setup, logout is handled client-side
  // But we can log the action for analytics
  logger.info('User logged out');
  
  res.status(200).json({
    message: 'Logout successful'
  });
}));

export default router;
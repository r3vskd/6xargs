import app from './src/app.js';
import { config } from './src/config/database.js';
import { logger } from './src/utils/logger.js';

const PORT = process.env.PORT || 3000;

// Start server
app.listen(PORT, () => {
  logger.info(`🚀 6xargs Backend Server running on http://localhost:${PORT}`);
  logger.info(`📊 Health check available at http://localhost:${PORT}/health`);
  logger.info(`🔧 Environment: ${process.env.NODE_ENV || 'development'}`);
  
  // Log database connection status
  if (config.database.url) {
    logger.info('🗄️  Database connection configured');
  } else {
    logger.warn('⚠️  Database connection not configured');
  }
});

// Graceful shutdown
process.on('SIGTERM', () => {
  logger.info('SIGTERM received, shutting down gracefully');
  process.exit(0);
});

process.on('SIGINT', () => {
  logger.info('SIGINT received, shutting down gracefully');
  process.exit(0);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  logger.error('Unhandled Promise Rejection:', err);
  process.exit(1);
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  logger.error('Uncaught Exception:', err);
  process.exit(1);
});
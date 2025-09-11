import express from 'express';
import { prisma } from '../config/database.js';
import { asyncHandler } from '../middleware/error.middleware.js';
import { authMiddleware, requireCompanyAdmin } from '../middleware/auth.middleware.js';
import { logger } from '../utils/logger.js';
import { aiService } from '../services/ai.service.js';
import { caiService } from '../services/cai.service.js';

const router = express.Router();

// AI Triage endpoint - Analyze a report using AI
router.post('/triage/:reportId', authMiddleware, asyncHandler(async (req, res) => {
  const { reportId } = req.params;
  const { forceReanalysis = false } = req.body;

  // Get report with existing triage
  const report = await prisma.report.findUnique({
    where: { id: reportId },
    include: {
      program: {
        include: {
          company: true
        }
      },
      triage: true,
      reporter: {
        select: {
          id: true,
          username: true
        }
      }
    }
  });

  if (!report) {
    return res.status(404).json({
      error: 'Report not found',
      message: 'The requested report does not exist'
    });
  }

  // Check permissions
  const user = await prisma.user.findUnique({
    where: { id: req.user.userId },
    include: { company: true }
  });

  const hasAccess = 
    req.user.role === 'ADMIN' ||
    report.reporterId === req.user.userId ||
    (user.company && report.program.companyId === user.company.id);

  if (!hasAccess) {
    return res.status(403).json({
      error: 'Access denied',
      message: 'You do not have permission to triage this report'
    });
  }

  // Check if already triaged and not forcing reanalysis
  if (report.triage && report.triage.status !== 'PENDING' && !forceReanalysis) {
    return res.status(409).json({
      error: 'Already triaged',
      message: 'This report has already been triaged. Use forceReanalysis=true to re-analyze.',
      triage: report.triage
    });
  }

  try {
    // Perform AI analysis
    const aiAnalysis = await aiService.analyzeReport({
      title: report.title,
      description: report.description,
      severity: report.severity,
      stepsToReproduce: report.stepsToReproduce,
      impact: report.impact,
      proofOfConcept: report.proofOfConcept,
      affectedUrls: report.affectedUrls,
      programScope: report.program.scope
    });

    // Update or create triage
    const triage = await prisma.triage.upsert({
      where: { reportId },
      update: {
        status: 'COMPLETED',
        aiAnalysis,
        priority: aiAnalysis.priority || 'MEDIUM',
        confidence: aiAnalysis.confidence || 0.5,
        updatedAt: new Date()
      },
      create: {
        reportId,
        status: 'COMPLETED',
        aiAnalysis,
        priority: aiAnalysis.priority || 'MEDIUM',
        confidence: aiAnalysis.confidence || 0.5
      }
    });

    logger.info(`AI triage completed for report ${reportId}`);

    res.status(200).json({
      message: 'AI triage completed successfully',
      triage,
      analysis: aiAnalysis
    });

  } catch (error) {
    logger.error('AI triage failed:', error);

    // Update triage status to failed
    await prisma.triage.upsert({
      where: { reportId },
      update: {
        status: 'FAILED',
        aiAnalysis: { error: error.message },
        updatedAt: new Date()
      },
      create: {
        reportId,
        status: 'FAILED',
        aiAnalysis: { error: error.message }
      }
    });

    res.status(500).json({
      error: 'AI triage failed',
      message: 'An error occurred during AI analysis',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}));

// CAI Security Scan endpoint
router.post('/cai/scan', authMiddleware, asyncHandler(async (req, res) => {
  const { target, scanType = 'basic', options = {} } = req.body;

  if (!target) {
    return res.status(400).json({
      error: 'Target required',
      message: 'Please provide a target URL or IP address to scan'
    });
  }

  // Validate scan type
  const validScanTypes = ['basic', 'comprehensive', 'web', 'network', 'api'];
  if (!validScanTypes.includes(scanType)) {
    return res.status(400).json({
      error: 'Invalid scan type',
      message: `Scan type must be one of: ${validScanTypes.join(', ')}`
    });
  }

  try {
    // Initiate CAI scan
    const scanResult = await caiService.initiateScan({
      target,
      scanType,
      options,
      userId: req.user.userId
    });

    logger.info(`CAI scan initiated for ${target} by ${req.user.email}`);

    res.status(202).json({
      message: 'CAI scan initiated successfully',
      scanId: scanResult.scanId,
      status: 'INITIATED',
      estimatedDuration: scanResult.estimatedDuration,
      target,
      scanType
    });

  } catch (error) {
    logger.error('CAI scan initiation failed:', error);

    res.status(500).json({
      error: 'Scan initiation failed',
      message: 'Failed to initiate CAI security scan',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}));

// Get CAI scan status
router.get('/cai/scan/:scanId', authMiddleware, asyncHandler(async (req, res) => {
  const { scanId } = req.params;

  try {
    const scanStatus = await caiService.getScanStatus(scanId);

    // Check if user has permission to view this scan
    if (scanStatus.userId !== req.user.userId && req.user.role !== 'ADMIN') {
      return res.status(403).json({
        error: 'Access denied',
        message: 'You do not have permission to view this scan'
      });
    }

    res.status(200).json({
      message: 'Scan status retrieved successfully',
      scan: scanStatus
    });

  } catch (error) {
    logger.error('Failed to get CAI scan status:', error);

    res.status(500).json({
      error: 'Failed to get scan status',
      message: 'An error occurred while retrieving scan status',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}));

// Get CAI scan results
router.get('/cai/scan/:scanId/results', authMiddleware, asyncHandler(async (req, res) => {
  const { scanId } = req.params;
  const { format = 'json' } = req.query;

  try {
    const scanResults = await caiService.getScanResults(scanId, format);

    // Check permissions
    if (scanResults.userId !== req.user.userId && req.user.role !== 'ADMIN') {
      return res.status(403).json({
        error: 'Access denied',
        message: 'You do not have permission to view these results'
      });
    }

    if (scanResults.status !== 'COMPLETED') {
      return res.status(202).json({
        message: 'Scan not yet completed',
        status: scanResults.status,
        progress: scanResults.progress
      });
    }

    res.status(200).json({
      message: 'Scan results retrieved successfully',
      results: scanResults
    });

  } catch (error) {
    logger.error('Failed to get CAI scan results:', error);

    res.status(500).json({
      error: 'Failed to get scan results',
      message: 'An error occurred while retrieving scan results',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}));

// AI-powered vulnerability assessment
router.post('/assess', authMiddleware, asyncHandler(async (req, res) => {
  const { 
    vulnerability, 
    context, 
    severity, 
    affectedSystems,
    businessImpact 
  } = req.body;

  if (!vulnerability || !context) {
    return res.status(400).json({
      error: 'Missing required fields',
      message: 'Vulnerability description and context are required'
    });
  }

  try {
    const assessment = await aiService.assessVulnerability({
      vulnerability,
      context,
      severity,
      affectedSystems,
      businessImpact
    });

    logger.info(`AI vulnerability assessment completed by ${req.user.email}`);

    res.status(200).json({
      message: 'Vulnerability assessment completed',
      assessment
    });

  } catch (error) {
    logger.error('AI vulnerability assessment failed:', error);

    res.status(500).json({
      error: 'Assessment failed',
      message: 'Failed to complete vulnerability assessment',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}));

// Get AI service status and capabilities
router.get('/status', authMiddleware, asyncHandler(async (req, res) => {
  try {
    const [aiStatus, caiStatus] = await Promise.all([
      aiService.getStatus(),
      caiService.getStatus()
    ]);

    res.status(200).json({
      message: 'AI services status retrieved successfully',
      services: {
        ai: aiStatus,
        cai: caiStatus
      },
      capabilities: {
        triage: aiStatus.available,
        scanning: caiStatus.available,
        assessment: aiStatus.available,
        supportedScanTypes: caiStatus.supportedScanTypes || []
      }
    });

  } catch (error) {
    logger.error('Failed to get AI services status:', error);

    res.status(500).json({
      error: 'Status check failed',
      message: 'Failed to check AI services status',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}));

// Batch triage multiple reports
router.post('/batch-triage', requireCompanyAdmin, asyncHandler(async (req, res) => {
  const { reportIds, options = {} } = req.body;

  if (!reportIds || !Array.isArray(reportIds) || reportIds.length === 0) {
    return res.status(400).json({
      error: 'Invalid report IDs',
      message: 'Please provide an array of report IDs to triage'
    });
  }

  if (reportIds.length > 50) {
    return res.status(400).json({
      error: 'Too many reports',
      message: 'Maximum 50 reports can be triaged in a single batch'
    });
  }

  try {
    // Get user's company to check permissions
    const user = await prisma.user.findUnique({
      where: { id: req.user.userId },
      include: { company: { include: { programs: true } } }
    });

    if (!user.company && req.user.role !== 'ADMIN') {
      return res.status(403).json({
        error: 'Access denied',
        message: 'Company association required for batch triage'
      });
    }

    // Get reports and validate permissions
    const reports = await prisma.report.findMany({
      where: {
        id: { in: reportIds },
        ...(req.user.role !== 'ADMIN' && {
          program: {
            companyId: user.company.id
          }
        })
      },
      include: {
        program: {
          select: {
            id: true,
            name: true,
            scope: true
          }
        }
      }
    });

    if (reports.length !== reportIds.length) {
      return res.status(400).json({
        error: 'Invalid reports',
        message: 'Some reports were not found or you do not have permission to access them'
      });
    }

    // Initiate batch triage
    const batchResult = await aiService.batchTriage(reports, options);

    logger.info(`Batch triage initiated for ${reports.length} reports by ${req.user.email}`);

    res.status(202).json({
      message: 'Batch triage initiated successfully',
      batchId: batchResult.batchId,
      reportCount: reports.length,
      estimatedCompletion: batchResult.estimatedCompletion
    });

  } catch (error) {
    logger.error('Batch triage failed:', error);

    res.status(500).json({
      error: 'Batch triage failed',
      message: 'Failed to initiate batch triage',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}));

export default router;
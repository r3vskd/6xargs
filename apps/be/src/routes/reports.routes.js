import express from 'express';
import { prisma } from '../config/database.js';
import { asyncHandler } from '../middleware/error.middleware.js';
import { authMiddleware, requireCompanyAdmin, requireHacker } from '../middleware/auth.middleware.js';
import { logger } from '../utils/logger.js';
import { sanitizeInput, validateUrl } from '../utils/validation.js';

const router = express.Router();

// Get reports (filtered by user role and permissions)
router.get('/', authMiddleware, asyncHandler(async (req, res) => {
  const { page = 1, limit = 10, status, severity, programId } = req.query;
  const skip = (parseInt(page) - 1) * parseInt(limit);
  const userId = req.user.userId;
  const userRole = req.user.role;

  let where = {};

  // Filter based on user role
  if (userRole === 'HACKER') {
    where.reporterId = userId;
  } else if (userRole === 'COMPANY_ADMIN') {
    // Get user's company programs
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: { company: { include: { programs: true } } }
    });
    
    if (user.company) {
      where.programId = {
        in: user.company.programs.map(p => p.id)
      };
    }
  }
  // ADMIN can see all reports (no additional filter)

  // Apply additional filters
  if (status) where.status = status.toUpperCase();
  if (severity) where.severity = severity.toUpperCase();
  if (programId) where.programId = programId;

  const [reports, total] = await Promise.all([
    prisma.report.findMany({
      where,
      skip,
      take: parseInt(limit),
      include: {
        reporter: {
          select: {
            id: true,
            username: true,
            firstName: true,
            lastName: true
          }
        },
        program: {
          select: {
            id: true,
            name: true,
            company: {
              select: {
                id: true,
                name: true
              }
            }
          }
        },
        triage: {
          select: {
            id: true,
            status: true,
            aiAnalysis: true,
            createdAt: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    }),
    prisma.report.count({ where })
  ]);

  res.status(200).json({
    message: 'Reports retrieved successfully',
    reports,
    pagination: {
      page: parseInt(page),
      limit: parseInt(limit),
      total,
      pages: Math.ceil(total / parseInt(limit))
    }
  });
}));

// Get report by ID
router.get('/:id', authMiddleware, asyncHandler(async (req, res) => {
  const { id } = req.params;
  const userId = req.user.userId;
  const userRole = req.user.role;

  const report = await prisma.report.findUnique({
    where: { id },
    include: {
      reporter: {
        select: {
          id: true,
          username: true,
          firstName: true,
          lastName: true
        }
      },
      program: {
        select: {
          id: true,
          name: true,
          company: {
            select: {
              id: true,
              name: true
            }
          }
        }
      },
      triage: {
        select: {
          id: true,
          status: true,
          aiAnalysis: true,
          priority: true,
          assignedTo: true,
          createdAt: true,
          updatedAt: true
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
  let hasAccess = false;
  
  if (userRole === 'ADMIN') {
    hasAccess = true;
  } else if (userRole === 'HACKER' && report.reporterId === userId) {
    hasAccess = true;
  } else if (userRole === 'COMPANY_ADMIN') {
    // Check if report belongs to user's company program
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: { company: { include: { programs: true } } }
    });
    
    if (user.company) {
      hasAccess = user.company.programs.some(p => p.id === report.programId);
    }
  }

  if (!hasAccess) {
    return res.status(403).json({
      error: 'Access denied',
      message: 'You do not have permission to view this report'
    });
  }

  res.status(200).json({
    message: 'Report retrieved successfully',
    report
  });
}));

// Create new report (hackers only)
router.post('/', requireHacker, asyncHandler(async (req, res) => {
  const {
    programId,
    title,
    description,
    severity,
    stepsToReproduce,
    impact,
    proofOfConcept,
    affectedUrls,
    attachments
  } = req.body;

  // Validation
  if (!programId) {
    return res.status(400).json({
      error: 'Program ID required',
      message: 'Please specify the program for this report'
    });
  }

  if (!title || title.trim().length < 5) {
    return res.status(400).json({
      error: 'Invalid title',
      message: 'Report title must be at least 5 characters long'
    });
  }

  if (!description || description.trim().length < 20) {
    return res.status(400).json({
      error: 'Invalid description',
      message: 'Report description must be at least 20 characters long'
    });
  }

  const validSeverities = ['LOW', 'MEDIUM', 'HIGH', 'CRITICAL'];
  if (!severity || !validSeverities.includes(severity.toUpperCase())) {
    return res.status(400).json({
      error: 'Invalid severity',
      message: `Severity must be one of: ${validSeverities.join(', ')}`
    });
  }

  // Check if program exists and is active
  const program = await prisma.program.findUnique({
    where: { id: programId, status: 'ACTIVE' }
  });

  if (!program) {
    return res.status(404).json({
      error: 'Program not found',
      message: 'The specified program does not exist or is not active'
    });
  }

  // Check if user is a member of the program (if it's private)
  if (!program.isPublic) {
    const membership = await prisma.programMember.findFirst({
      where: {
        programId,
        userId: req.user.userId,
        status: 'ACTIVE'
      }
    });

    if (!membership) {
      return res.status(403).json({
        error: 'Access denied',
        message: 'You must be a member of this private program to submit reports'
      });
    }
  }

  // Validate URLs if provided
  if (affectedUrls && Array.isArray(affectedUrls)) {
    for (const url of affectedUrls) {
      if (!validateUrl(url)) {
        return res.status(400).json({
          error: 'Invalid URL',
          message: `Invalid URL provided: ${url}`
        });
      }
    }
  }

  // Create report
  const report = await prisma.report.create({
    data: {
      programId,
      reporterId: req.user.userId,
      title: sanitizeInput(title),
      description: sanitizeInput(description),
      severity: severity.toUpperCase(),
      stepsToReproduce: stepsToReproduce ? sanitizeInput(stepsToReproduce) : null,
      impact: impact ? sanitizeInput(impact) : null,
      proofOfConcept: proofOfConcept ? sanitizeInput(proofOfConcept) : null,
      affectedUrls: affectedUrls || [],
      attachments: attachments || [],
      status: 'SUBMITTED'
    },
    include: {
      program: {
        select: {
          id: true,
          name: true,
          company: {
            select: {
              id: true,
              name: true
            }
          }
        }
      }
    }
  });

  // Create initial triage entry
  await prisma.triage.create({
    data: {
      reportId: report.id,
      status: 'PENDING',
      priority: 'MEDIUM', // Default priority
      aiAnalysis: {} // Will be populated by AI service
    }
  });

  logger.info(`New report submitted: ${report.title} by ${req.user.email}`);

  res.status(201).json({
    message: 'Report submitted successfully',
    report
  });
}));

// Update report status (company admin only)
router.put('/:id/status', requireCompanyAdmin, asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { status, resolution, bountyAmount } = req.body;

  const validStatuses = ['SUBMITTED', 'TRIAGED', 'ACCEPTED', 'REJECTED', 'RESOLVED', 'DUPLICATE'];
  if (!status || !validStatuses.includes(status.toUpperCase())) {
    return res.status(400).json({
      error: 'Invalid status',
      message: `Status must be one of: ${validStatuses.join(', ')}`
    });
  }

  // Get report and check permissions
  const report = await prisma.report.findUnique({
    where: { id },
    include: {
      program: {
        include: {
          company: true
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

  // Check if user has permission to update this report
  const user = await prisma.user.findUnique({
    where: { id: req.user.userId },
    include: { company: true }
  });

  if (report.program.companyId !== user.company?.id && req.user.role !== 'ADMIN') {
    return res.status(403).json({
      error: 'Access denied',
      message: 'You can only update reports from your company programs'
    });
  }

  // Update report
  const updatedReport = await prisma.report.update({
    where: { id },
    data: {
      status: status.toUpperCase(),
      resolution: resolution ? sanitizeInput(resolution) : null,
      bountyAmount: bountyAmount ? parseFloat(bountyAmount) : null,
      resolvedAt: status.toUpperCase() === 'RESOLVED' ? new Date() : null,
      updatedAt: new Date()
    },
    include: {
      reporter: {
        select: {
          id: true,
          username: true,
          email: true
        }
      },
      program: {
        select: {
          id: true,
          name: true
        }
      }
    }
  });

  // Create earning record if bounty is awarded
  if (bountyAmount && parseFloat(bountyAmount) > 0 && status.toUpperCase() === 'RESOLVED') {
    await prisma.earning.create({
      data: {
        userId: report.reporterId,
        reportId: report.id,
        amount: parseFloat(bountyAmount),
        status: 'PENDING',
        description: `Bounty for report: ${report.title}`
      }
    });
  }

  logger.info(`Report status updated: ${report.title} -> ${status} by ${req.user.email}`);

  res.status(200).json({
    message: 'Report status updated successfully',
    report: updatedReport
  });
}));

// Delete report (soft delete, reporter or admin only)
router.delete('/:id', authMiddleware, asyncHandler(async (req, res) => {
  const { id } = req.params;
  const userId = req.user.userId;
  const userRole = req.user.role;

  const report = await prisma.report.findUnique({
    where: { id }
  });

  if (!report) {
    return res.status(404).json({
      error: 'Report not found',
      message: 'The requested report does not exist'
    });
  }

  // Check permissions (only reporter or admin can delete)
  if (report.reporterId !== userId && userRole !== 'ADMIN') {
    return res.status(403).json({
      error: 'Access denied',
      message: 'You can only delete your own reports'
    });
  }

  // Soft delete
  await prisma.report.update({
    where: { id },
    data: {
      status: 'DELETED',
      deletedAt: new Date()
    }
  });

  logger.info(`Report deleted: ${report.title} by ${req.user.email}`);

  res.status(200).json({
    message: 'Report deleted successfully'
  });
}));

export default router;
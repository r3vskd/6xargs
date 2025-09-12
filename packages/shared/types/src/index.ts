// User Types
export interface User {
  id: string;
  email: string;
  name?: string;
  role: UserRole;
  companyId?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export enum UserRole {
  ADMIN = 'ADMIN',
  COMPANY_ADMIN = 'COMPANY_ADMIN',
  HACKER = 'HACKER',
}

// Company Types
export interface Company {
  id: string;
  name: string;
  description?: string;
  website?: string;
  industry?: string;
  size?: CompanySize;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export enum CompanySize {
  STARTUP = 'STARTUP',
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE',
  ENTERPRISE = 'ENTERPRISE',
}

// Program Types
export interface Program {
  id: string;
  name: string;
  description: string;
  companyId: string;
  company?: Company;
  scope: string[];
  rewards: ProgramReward[];
  rules: string;
  status: ProgramStatus;
  isPublic: boolean;
  startDate?: string;
  endDate?: string;
  maxReports?: number;
  createdAt: string;
  updatedAt: string;
}

export interface ProgramReward {
  severity: Severity;
  minAmount: number;
  maxAmount: number;
  currency: string;
}

export enum ProgramStatus {
  DRAFT = 'DRAFT',
  ACTIVE = 'ACTIVE',
  PAUSED = 'PAUSED',
  CLOSED = 'CLOSED',
}

// Report Types
export interface Report {
  id: string;
  title: string;
  description: string;
  severity: Severity;
  status: ReportStatus;
  programId: string;
  program?: Program;
  hackerId: string;
  hacker?: User;
  assigneeId?: string;
  assignee?: User;
  vulnerabilityType: VulnerabilityType;
  stepsToReproduce: string;
  impact: string;
  proofOfConcept?: string;
  attachments: string[];
  reward?: number;
  currency?: string;
  submittedAt: string;
  resolvedAt?: string;
  createdAt: string;
  updatedAt: string;
}

export enum Severity {
  CRITICAL = 'CRITICAL',
  HIGH = 'HIGH',
  MEDIUM = 'MEDIUM',
  LOW = 'LOW',
  INFO = 'INFO',
}

export enum ReportStatus {
  SUBMITTED = 'SUBMITTED',
  TRIAGING = 'TRIAGING',
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED',
  DUPLICATE = 'DUPLICATE',
  RESOLVED = 'RESOLVED',
  CLOSED = 'CLOSED',
}

export enum VulnerabilityType {
  XSS = 'XSS',
  SQL_INJECTION = 'SQL_INJECTION',
  CSRF = 'CSRF',
  AUTHENTICATION_BYPASS = 'AUTHENTICATION_BYPASS',
  AUTHORIZATION_BYPASS = 'AUTHORIZATION_BYPASS',
  INFORMATION_DISCLOSURE = 'INFORMATION_DISCLOSURE',
  REMOTE_CODE_EXECUTION = 'REMOTE_CODE_EXECUTION',
  LOCAL_FILE_INCLUSION = 'LOCAL_FILE_INCLUSION',
  REMOTE_FILE_INCLUSION = 'REMOTE_FILE_INCLUSION',
  DIRECTORY_TRAVERSAL = 'DIRECTORY_TRAVERSAL',
  BUSINESS_LOGIC = 'BUSINESS_LOGIC',
  DENIAL_OF_SERVICE = 'DENIAL_OF_SERVICE',
  CRYPTOGRAPHIC = 'CRYPTOGRAPHIC',
  CONFIGURATION = 'CONFIGURATION',
  OTHER = 'OTHER',
}

// Triage Types
export interface Triage {
  id: string;
  reportId: string;
  report?: Report;
  aiAnalysis: AIAnalysis;
  humanReview?: HumanReview;
  finalDecision: TriageDecision;
  confidence: number;
  processingTime: number;
  createdAt: string;
  updatedAt: string;
}

export interface AIAnalysis {
  severity: Severity;
  vulnerabilityType: VulnerabilityType;
  confidence: number;
  reasoning: string;
  suggestedReward?: number;
  riskScore: number;
  falsePositiveProbability: number;
}

export interface HumanReview {
  reviewerId: string;
  reviewer?: User;
  decision: TriageDecision;
  notes: string;
  reviewedAt: string;
}

export enum TriageDecision {
  ACCEPT = 'ACCEPT',
  REJECT = 'REJECT',
  NEEDS_MORE_INFO = 'NEEDS_MORE_INFO',
  DUPLICATE = 'DUPLICATE',
  OUT_OF_SCOPE = 'OUT_OF_SCOPE',
}

// CAI (CLI Agentic AI) Types
export interface CAISession {
  id: string;
  userId: string;
  user?: User;
  programId?: string;
  program?: Program;
  target: string;
  scanType: CAIScanType;
  status: CAIStatus;
  config: CAIConfig;
  results?: CAIResults;
  startedAt: string;
  completedAt?: string;
  createdAt: string;
  updatedAt: string;
}

export enum CAIScanType {
  QUICK = 'QUICK',
  COMPREHENSIVE = 'COMPREHENSIVE',
  TARGETED = 'TARGETED',
  CUSTOM = 'CUSTOM',
}

export enum CAIStatus {
  PENDING = 'PENDING',
  RUNNING = 'RUNNING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
  CANCELLED = 'CANCELLED',
}

export interface CAIConfig {
  target: string;
  scanType: CAIScanType;
  modules: string[];
  depth: number;
  timeout: number;
  concurrent: number;
  userAgent?: string;
  headers?: Record<string, string>;
  cookies?: Record<string, string>;
  excludePatterns?: string[];
  includePatterns?: string[];
}

export interface CAIResults {
  vulnerabilities: CAIVulnerability[];
  summary: CAISummary;
  metadata: CAIMetadata;
}

export interface CAIVulnerability {
  id: string;
  type: VulnerabilityType;
  severity: Severity;
  title: string;
  description: string;
  url: string;
  method: string;
  parameter?: string;
  payload?: string;
  evidence: string;
  impact: string;
  recommendation: string;
  confidence: number;
  references: string[];
}

export interface CAISummary {
  totalVulnerabilities: number;
  severityBreakdown: Record<Severity, number>;
  typeBreakdown: Record<VulnerabilityType, number>;
  riskScore: number;
  scanDuration: number;
  urlsTested: number;
  requestsSent: number;
}

export interface CAIMetadata {
  scanId: string;
  target: string;
  startTime: string;
  endTime: string;
  duration: number;
  version: string;
  modules: string[];
  userAgent: string;
}

// Notification Types
export interface Notification {
  id: string;
  userId: string;
  user?: User;
  type: NotificationType;
  title: string;
  message: string;
  data?: Record<string, any>;
  isRead: boolean;
  createdAt: string;
  updatedAt: string;
}

export enum NotificationType {
  REPORT_SUBMITTED = 'REPORT_SUBMITTED',
  REPORT_ACCEPTED = 'REPORT_ACCEPTED',
  REPORT_REJECTED = 'REPORT_REJECTED',
  REPORT_RESOLVED = 'REPORT_RESOLVED',
  TRIAGE_COMPLETED = 'TRIAGE_COMPLETED',
  CAI_SCAN_COMPLETED = 'CAI_SCAN_COMPLETED',
  PROGRAM_CREATED = 'PROGRAM_CREATED',
  PROGRAM_UPDATED = 'PROGRAM_UPDATED',
  REWARD_PAID = 'REWARD_PAID',
  SYSTEM_MAINTENANCE = 'SYSTEM_MAINTENANCE',
}

// API Response Types
export interface APIResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  meta?: {
    page?: number;
    limit?: number;
    total?: number;
    totalPages?: number;
  };
}

export interface PaginationParams {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface FilterParams {
  search?: string;
  status?: string;
  severity?: Severity;
  type?: VulnerabilityType;
  dateFrom?: string;
  dateTo?: string;
}

// Authentication Types
export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  name: string;
  role: UserRole;
  companyId?: string;
}

export interface AuthResponse {
  user: User;
  token: string;
  refreshToken?: string;
  expiresIn: number;
}

export interface JWTPayload {
  userId: string;
  email: string;
  role: UserRole;
  companyId?: string;
  iat: number;
  exp: number;
}

// Statistics Types
export interface DashboardStats {
  totalPrograms: number;
  activeReports: number;
  resolvedReports: number;
  pendingTriage: number;
  totalEarnings: number;
  thisMonthEarnings: number;
}

export interface ProgramStats {
  totalReports: number;
  acceptedReports: number;
  rejectedReports: number;
  duplicateReports: number;
  averageResolutionTime: number;
  totalRewardsPaid: number;
  severityBreakdown: Record<Severity, number>;
  typeBreakdown: Record<VulnerabilityType, number>;
}

export interface UserStats {
  totalReports: number;
  acceptedReports: number;
  totalEarnings: number;
  averageReward: number;
  rank: number;
  reputation: number;
  successRate: number;
}

// Webhook Types
export interface WebhookEvent {
  id: string;
  type: WebhookEventType;
  data: Record<string, any>;
  timestamp: string;
  signature: string;
}

export enum WebhookEventType {
  REPORT_CREATED = 'report.created',
  REPORT_UPDATED = 'report.updated',
  REPORT_RESOLVED = 'report.resolved',
  TRIAGE_COMPLETED = 'triage.completed',
  CAI_SCAN_COMPLETED = 'cai.scan.completed',
  PROGRAM_CREATED = 'program.created',
  PROGRAM_UPDATED = 'program.updated',
  USER_REGISTERED = 'user.registered',
  REWARD_PAID = 'reward.paid',
}

// Export all types
export * from './api';
export * from './events';
export * from './utils';
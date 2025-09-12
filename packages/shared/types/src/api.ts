import type {
  User,
  UserRole,
  Company,
  Program,
  Report,
  Triage,
  CAISession,
  Notification,
  Severity,
  VulnerabilityType,
  PaginationParams,
  FilterParams,
} from './index';

// Base API Types
export interface APIError {
  code: string;
  message: string;
  details?: Record<string, any>;
  timestamp: string;
  path: string;
}

export interface APISuccess<T = any> {
  data: T;
  message?: string;
  meta?: {
    pagination?: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
    };
    filters?: Record<string, any>;
    sort?: {
      field: string;
      order: 'asc' | 'desc';
    };
  };
}

// Authentication API Types
export interface LoginRequestBody {
  email: string;
  password: string;
}

export interface RegisterRequestBody {
  email: string;
  password: string;
  name: string;
  role: UserRole;
  companyId?: string;
}

export interface AuthResponseData {
  user: User;
  token: string;
  refreshToken?: string;
  expiresIn: number;
}

export interface RefreshTokenRequestBody {
  refreshToken: string;
}

export interface ChangePasswordRequestBody {
  currentPassword: string;
  newPassword: string;
}

export interface ForgotPasswordRequestBody {
  email: string;
}

export interface ResetPasswordRequestBody {
  token: string;
  newPassword: string;
}

// User API Types
export interface UpdateUserRequestBody {
  name?: string;
  email?: string;
  bio?: string;
  website?: string;
  twitter?: string;
  linkedin?: string;
}

export interface UserListQuery extends PaginationParams, FilterParams {
  role?: UserRole;
  companyId?: string;
  isActive?: boolean;
}

// Company API Types
export interface CreateCompanyRequestBody {
  name: string;
  description?: string;
  website?: string;
  industry?: string;
  size?: string;
}

export interface UpdateCompanyRequestBody {
  name?: string;
  description?: string;
  website?: string;
  industry?: string;
  size?: string;
}

export interface CompanyListQuery extends PaginationParams, FilterParams {
  industry?: string;
  size?: string;
  isActive?: boolean;
}

// Program API Types
export interface CreateProgramRequestBody {
  name: string;
  description: string;
  scope: string[];
  rewards: Array<{
    severity: Severity;
    minAmount: number;
    maxAmount: number;
    currency: string;
  }>;
  rules: string;
  isPublic: boolean;
  startDate?: string;
  endDate?: string;
  maxReports?: number;
}

export interface UpdateProgramRequestBody {
  name?: string;
  description?: string;
  scope?: string[];
  rewards?: Array<{
    severity: Severity;
    minAmount: number;
    maxAmount: number;
    currency: string;
  }>;
  rules?: string;
  isPublic?: boolean;
  startDate?: string;
  endDate?: string;
  maxReports?: number;
  status?: string;
}

export interface ProgramListQuery extends PaginationParams, FilterParams {
  companyId?: string;
  isPublic?: boolean;
  status?: string;
}

export interface JoinProgramRequestBody {
  programId: string;
}

// Report API Types
export interface CreateReportRequestBody {
  title: string;
  description: string;
  severity: Severity;
  programId: string;
  vulnerabilityType: VulnerabilityType;
  stepsToReproduce: string;
  impact: string;
  proofOfConcept?: string;
  attachments?: string[];
}

export interface UpdateReportRequestBody {
  title?: string;
  description?: string;
  severity?: Severity;
  vulnerabilityType?: VulnerabilityType;
  stepsToReproduce?: string;
  impact?: string;
  proofOfConcept?: string;
  attachments?: string[];
  status?: string;
  assigneeId?: string;
  reward?: number;
  currency?: string;
}

export interface ReportListQuery extends PaginationParams, FilterParams {
  programId?: string;
  hackerId?: string;
  assigneeId?: string;
  status?: string;
  severity?: Severity;
  vulnerabilityType?: VulnerabilityType;
}

export interface ReportCommentRequestBody {
  content: string;
  isInternal?: boolean;
}

// Triage API Types
export interface CreateTriageRequestBody {
  reportId: string;
}

export interface UpdateTriageRequestBody {
  humanReview?: {
    decision: string;
    notes: string;
  };
  finalDecision?: string;
}

export interface TriageListQuery extends PaginationParams, FilterParams {
  reportId?: string;
  confidence?: number;
  finalDecision?: string;
}

export interface BatchTriageRequestBody {
  reportIds: string[];
}

// CAI API Types
export interface CreateCAISessionRequestBody {
  target: string;
  scanType: string;
  programId?: string;
  config?: {
    modules?: string[];
    depth?: number;
    timeout?: number;
    concurrent?: number;
    userAgent?: string;
    headers?: Record<string, string>;
    cookies?: Record<string, string>;
    excludePatterns?: string[];
    includePatterns?: string[];
  };
}

export interface CAISessionListQuery extends PaginationParams, FilterParams {
  userId?: string;
  programId?: string;
  status?: string;
  scanType?: string;
}

export interface CAISessionStatusResponse {
  id: string;
  status: string;
  progress: number;
  currentStep?: string;
  estimatedTimeRemaining?: number;
  vulnerabilitiesFound: number;
}

// Notification API Types
export interface CreateNotificationRequestBody {
  userId: string;
  type: string;
  title: string;
  message: string;
  data?: Record<string, any>;
}

export interface UpdateNotificationRequestBody {
  isRead?: boolean;
}

export interface NotificationListQuery extends PaginationParams {
  userId?: string;
  type?: string;
  isRead?: boolean;
}

export interface MarkAllReadRequestBody {
  userId: string;
}

// Statistics API Types
export interface DashboardStatsQuery {
  userId?: string;
  companyId?: string;
  dateFrom?: string;
  dateTo?: string;
}

export interface ProgramStatsQuery {
  programId: string;
  dateFrom?: string;
  dateTo?: string;
}

export interface UserStatsQuery {
  userId: string;
  dateFrom?: string;
  dateTo?: string;
}

export interface LeaderboardQuery extends PaginationParams {
  timeframe?: 'week' | 'month' | 'quarter' | 'year' | 'all';
  metric?: 'earnings' | 'reports' | 'reputation';
}

// File Upload API Types
export interface FileUploadResponse {
  id: string;
  filename: string;
  originalName: string;
  mimeType: string;
  size: number;
  url: string;
  createdAt: string;
}

export interface FileUploadRequestBody {
  file: File;
  category?: 'report' | 'profile' | 'company' | 'other';
}

// Webhook API Types
export interface CreateWebhookRequestBody {
  url: string;
  events: string[];
  secret?: string;
  isActive?: boolean;
}

export interface UpdateWebhookRequestBody {
  url?: string;
  events?: string[];
  secret?: string;
  isActive?: boolean;
}

export interface WebhookListQuery extends PaginationParams {
  isActive?: boolean;
}

export interface WebhookTestRequestBody {
  webhookId: string;
  eventType: string;
  testData?: Record<string, any>;
}

// Search API Types
export interface SearchQuery {
  q: string;
  type?: 'users' | 'companies' | 'programs' | 'reports' | 'all';
  limit?: number;
  filters?: Record<string, any>;
}

export interface SearchResult {
  type: string;
  id: string;
  title: string;
  description?: string;
  url: string;
  relevance: number;
  metadata?: Record<string, any>;
}

export interface SearchResponse {
  query: string;
  results: SearchResult[];
  total: number;
  took: number;
  suggestions?: string[];
}

// Export API Types
export interface ExportRequestBody {
  type: 'reports' | 'programs' | 'users' | 'statistics';
  format: 'csv' | 'json' | 'pdf';
  filters?: Record<string, any>;
  dateFrom?: string;
  dateTo?: string;
}

export interface ExportResponse {
  id: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  downloadUrl?: string;
  createdAt: string;
  expiresAt: string;
}
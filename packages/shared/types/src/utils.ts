// Utility Types
export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;
export type Maybe<T> = T | null | undefined;

// Make all properties optional
export type Partial<T> = {
  [P in keyof T]?: T[P];
};

// Make all properties required
export type Required<T> = {
  [P in keyof T]-?: T[P];
};

// Pick specific properties
export type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

// Omit specific properties
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

// Deep partial
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

// Deep required
export type DeepRequired<T> = {
  [P in keyof T]-?: T[P] extends object ? DeepRequired<T[P]> : T[P];
};

// Extract keys of a specific type
export type KeysOfType<T, U> = {
  [K in keyof T]: T[K] extends U ? K : never;
}[keyof T];

// Create a type with specific keys as optional
export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

// Create a type with specific keys as required
export type RequiredBy<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;

// Array element type
export type ArrayElement<T> = T extends (infer U)[] ? U : never;

// Promise value type
export type PromiseValue<T> = T extends Promise<infer U> ? U : never;

// Function return type
export type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

// Function parameters type
export type Parameters<T> = T extends (...args: infer P) => any ? P : never;

// Constructor parameters type
export type ConstructorParameters<T> = T extends new (...args: infer P) => any ? P : never;

// Instance type
export type InstanceType<T> = T extends new (...args: any[]) => infer R ? R : never;

// Validation Types
export interface ValidationError {
  field: string;
  message: string;
  code: string;
  value?: any;
}

export interface ValidationResult<T = any> {
  isValid: boolean;
  data?: T;
  errors: ValidationError[];
}

export type Validator<T> = (value: T) => ValidationResult<T>;

// Pagination Types
export interface PaginationParams {
  page?: number;
  limit?: number;
  offset?: number;
}

export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  meta: PaginationMeta;
}

// Sorting Types
export interface SortParams {
  field: string;
  order: 'asc' | 'desc';
}

export interface SortOption {
  label: string;
  value: string;
  field: string;
  order: 'asc' | 'desc';
}

// Filtering Types
export interface FilterParams {
  search?: string;
  filters?: Record<string, any>;
}

export interface FilterOption {
  label: string;
  value: string | number | boolean;
  count?: number;
}

export interface FilterGroup {
  name: string;
  label: string;
  type: 'select' | 'multiselect' | 'range' | 'date' | 'boolean';
  options?: FilterOption[];
  min?: number;
  max?: number;
}

// Date Range Types
export interface DateRange {
  from: string;
  to: string;
}

export interface DateRangeOption {
  label: string;
  value: string;
  range: DateRange;
}

// File Types
export interface FileInfo {
  id: string;
  name: string;
  originalName: string;
  mimeType: string;
  size: number;
  url: string;
  thumbnailUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface FileUploadProgress {
  fileId: string;
  progress: number;
  status: 'pending' | 'uploading' | 'completed' | 'error';
  error?: string;
}

// Cache Types
export interface CacheEntry<T> {
  key: string;
  value: T;
  expiresAt: number;
  createdAt: number;
}

export interface CacheOptions {
  ttl?: number; // Time to live in milliseconds
  maxSize?: number;
  serialize?: boolean;
}

// Rate Limiting Types
export interface RateLimitInfo {
  limit: number;
  remaining: number;
  reset: number;
  retryAfter?: number;
}

export interface RateLimitOptions {
  windowMs: number;
  max: number;
  message?: string;
  standardHeaders?: boolean;
  legacyHeaders?: boolean;
}

// Health Check Types
export interface HealthCheckResult {
  status: 'healthy' | 'unhealthy' | 'degraded';
  timestamp: string;
  uptime: number;
  checks: Record<string, {
    status: 'healthy' | 'unhealthy';
    message?: string;
    responseTime?: number;
  }>;
}

// Metrics Types
export interface MetricPoint {
  timestamp: string;
  value: number;
  tags?: Record<string, string>;
}

export interface Metric {
  name: string;
  type: 'counter' | 'gauge' | 'histogram' | 'summary';
  description?: string;
  unit?: string;
  points: MetricPoint[];
}

export interface MetricsSnapshot {
  timestamp: string;
  metrics: Metric[];
}

// Configuration Types
export interface ConfigValue {
  key: string;
  value: any;
  type: 'string' | 'number' | 'boolean' | 'object' | 'array';
  description?: string;
  required?: boolean;
  defaultValue?: any;
  validation?: {
    min?: number;
    max?: number;
    pattern?: string;
    enum?: any[];
  };
}

export interface ConfigSection {
  name: string;
  description?: string;
  values: ConfigValue[];
}

export interface Configuration {
  version: string;
  sections: ConfigSection[];
}

// Audit Types
export interface AuditEntry {
  id: string;
  action: string;
  entityType: string;
  entityId: string;
  userId?: string;
  userEmail?: string;
  changes?: {
    before?: Record<string, any>;
    after?: Record<string, any>;
  };
  metadata?: Record<string, any>;
  ipAddress?: string;
  userAgent?: string;
  timestamp: string;
}

export interface AuditQuery {
  entityType?: string;
  entityId?: string;
  userId?: string;
  action?: string;
  from?: string;
  to?: string;
  page?: number;
  limit?: number;
}

// Feature Flag Types
export interface FeatureFlag {
  key: string;
  name: string;
  description?: string;
  enabled: boolean;
  rolloutPercentage?: number;
  conditions?: {
    userIds?: string[];
    userRoles?: string[];
    companyIds?: string[];
    environment?: string[];
  };
  createdAt: string;
  updatedAt: string;
}

export interface FeatureFlagContext {
  userId?: string;
  userRole?: string;
  companyId?: string;
  environment?: string;
  customAttributes?: Record<string, any>;
}

// Queue Types
export interface QueueJob<T = any> {
  id: string;
  type: string;
  data: T;
  priority?: number;
  delay?: number;
  attempts?: number;
  maxAttempts?: number;
  backoff?: {
    type: 'fixed' | 'exponential';
    delay: number;
  };
  createdAt: string;
  processedAt?: string;
  completedAt?: string;
  failedAt?: string;
  error?: string;
}

export interface QueueOptions {
  concurrency?: number;
  defaultJobOptions?: {
    priority?: number;
    delay?: number;
    attempts?: number;
    backoff?: {
      type: 'fixed' | 'exponential';
      delay: number;
    };
  };
}

// Search Types
export interface SearchFilters {
  [key: string]: any;
}

export interface SearchSort {
  field: string;
  order: 'asc' | 'desc';
}

export interface SearchQuery {
  query?: string;
  filters?: SearchFilters;
  sort?: SearchSort[];
  page?: number;
  limit?: number;
  highlight?: boolean;
  facets?: string[];
}

export interface SearchHit<T = any> {
  id: string;
  score: number;
  source: T;
  highlight?: Record<string, string[]>;
}

export interface SearchFacet {
  field: string;
  values: Array<{
    value: any;
    count: number;
  }>;
}

export interface SearchResult<T = any> {
  hits: SearchHit<T>[];
  total: number;
  maxScore: number;
  took: number;
  facets?: SearchFacet[];
}

// Utility Functions Types
export type DeepClone<T> = T extends object
  ? T extends Array<infer U>
    ? Array<DeepClone<U>>
    : { [K in keyof T]: DeepClone<T[K]> }
  : T;

export type Flatten<T> = T extends Array<infer U> ? U : T;

export type NonEmptyArray<T> = [T, ...T[]];

export type Tuple<T, N extends number> = N extends N
  ? number extends N
    ? T[]
    : _TupleOf<T, N, []>
  : never;

type _TupleOf<T, N extends number, R extends unknown[]> = R['length'] extends N
  ? R
  : _TupleOf<T, N, [...R, T]>;

// Brand Types for Type Safety
export type Brand<T, B> = T & { __brand: B };

export type UserId = Brand<string, 'UserId'>;
export type CompanyId = Brand<string, 'CompanyId'>;
export type ProgramId = Brand<string, 'ProgramId'>;
export type ReportId = Brand<string, 'ReportId'>;
export type SessionId = Brand<string, 'SessionId'>;
export type Email = Brand<string, 'Email'>;
export type URL = Brand<string, 'URL'>;
export type JWT = Brand<string, 'JWT'>;
export type Hash = Brand<string, 'Hash'>;
export type Timestamp = Brand<number, 'Timestamp'>;

// Environment Types
export type Environment = 'development' | 'staging' | 'production' | 'test';

export interface EnvironmentConfig {
  NODE_ENV: Environment;
  PORT: number;
  DATABASE_URL: string;
  REDIS_URL?: string;
  JWT_SECRET: string;
  API_BASE_URL: string;
  FRONTEND_URL: string;
  WEBHOOK_SECRET?: string;
  UPLOAD_MAX_SIZE?: number;
  RATE_LIMIT_WINDOW?: number;
  RATE_LIMIT_MAX?: number;
  LOG_LEVEL?: 'error' | 'warn' | 'info' | 'debug';
  SENTRY_DSN?: string;
  STRIPE_SECRET_KEY?: string;
  STRIPE_WEBHOOK_SECRET?: string;
  EMAIL_SERVICE?: string;
  EMAIL_FROM?: string;
  SMTP_HOST?: string;
  SMTP_PORT?: number;
  SMTP_USER?: string;
  SMTP_PASS?: string;
}

// Type Guards
export const isString = (value: unknown): value is string => typeof value === 'string';
export const isNumber = (value: unknown): value is number => typeof value === 'number';
export const isBoolean = (value: unknown): value is boolean => typeof value === 'boolean';
export const isObject = (value: unknown): value is object => typeof value === 'object' && value !== null;
export const isArray = (value: unknown): value is unknown[] => Array.isArray(value);
export const isFunction = (value: unknown): value is Function => typeof value === 'function';
export const isNull = (value: unknown): value is null => value === null;
export const isUndefined = (value: unknown): value is undefined => value === undefined;
export const isNullish = (value: unknown): value is null | undefined => value == null;

// Assertion Functions
export const assertString = (value: unknown, message = 'Expected string'): asserts value is string => {
  if (!isString(value)) throw new Error(message);
};

export const assertNumber = (value: unknown, message = 'Expected number'): asserts value is number => {
  if (!isNumber(value)) throw new Error(message);
};

export const assertBoolean = (value: unknown, message = 'Expected boolean'): asserts value is boolean => {
  if (!isBoolean(value)) throw new Error(message);
};

export const assertObject = (value: unknown, message = 'Expected object'): asserts value is object => {
  if (!isObject(value)) throw new Error(message);
};

export const assertArray = (value: unknown, message = 'Expected array'): asserts value is unknown[] => {
  if (!isArray(value)) throw new Error(message);
};

export const assertNonNull = <T>(value: T | null, message = 'Expected non-null value'): asserts value is T => {
  if (value === null) throw new Error(message);
};

export const assertDefined = <T>(value: T | undefined, message = 'Expected defined value'): asserts value is T => {
  if (value === undefined) throw new Error(message);
};

export const assertNonNullish = <T>(value: T | null | undefined, message = 'Expected non-nullish value'): asserts value is T => {
  if (value == null) throw new Error(message);
};
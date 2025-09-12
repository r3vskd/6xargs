import type {
  User,
  Company,
  Program,
  Report,
  Triage,
  CAISession,
  Notification,
} from './index';

// Base Event Types
export interface BaseEvent {
  id: string;
  type: string;
  timestamp: string;
  userId?: string;
  companyId?: string;
  metadata?: Record<string, any>;
}

export interface EventPayload<T = any> {
  event: BaseEvent;
  data: T;
  previous?: Partial<T>;
}

// User Events
export interface UserCreatedEvent extends BaseEvent {
  type: 'user.created';
}

export interface UserUpdatedEvent extends BaseEvent {
  type: 'user.updated';
}

export interface UserDeletedEvent extends BaseEvent {
  type: 'user.deleted';
}

export interface UserLoginEvent extends BaseEvent {
  type: 'user.login';
}

export interface UserLogoutEvent extends BaseEvent {
  type: 'user.logout';
}

export interface UserPasswordChangedEvent extends BaseEvent {
  type: 'user.password_changed';
}

export interface UserEmailVerifiedEvent extends BaseEvent {
  type: 'user.email_verified';
}

export interface UserProfileCompletedEvent extends BaseEvent {
  type: 'user.profile_completed';
}

// Company Events
export interface CompanyCreatedEvent extends BaseEvent {
  type: 'company.created';
}

export interface CompanyUpdatedEvent extends BaseEvent {
  type: 'company.updated';
}

export interface CompanyDeletedEvent extends BaseEvent {
  type: 'company.deleted';
}

export interface CompanyVerifiedEvent extends BaseEvent {
  type: 'company.verified';
}

export interface CompanySubscriptionChangedEvent extends BaseEvent {
  type: 'company.subscription_changed';
}

// Program Events
export interface ProgramCreatedEvent extends BaseEvent {
  type: 'program.created';
}

export interface ProgramUpdatedEvent extends BaseEvent {
  type: 'program.updated';
}

export interface ProgramDeletedEvent extends BaseEvent {
  type: 'program.deleted';
}

export interface ProgramPublishedEvent extends BaseEvent {
  type: 'program.published';
}

export interface ProgramUnpublishedEvent extends BaseEvent {
  type: 'program.unpublished';
}

export interface ProgramStartedEvent extends BaseEvent {
  type: 'program.started';
}

export interface ProgramEndedEvent extends BaseEvent {
  type: 'program.ended';
}

export interface ProgramJoinedEvent extends BaseEvent {
  type: 'program.joined';
}

export interface ProgramLeftEvent extends BaseEvent {
  type: 'program.left';
}

// Report Events
export interface ReportCreatedEvent extends BaseEvent {
  type: 'report.created';
}

export interface ReportUpdatedEvent extends BaseEvent {
  type: 'report.updated';
}

export interface ReportDeletedEvent extends BaseEvent {
  type: 'report.deleted';
}

export interface ReportSubmittedEvent extends BaseEvent {
  type: 'report.submitted';
}

export interface ReportTriagedEvent extends BaseEvent {
  type: 'report.triaged';
}

export interface ReportAcceptedEvent extends BaseEvent {
  type: 'report.accepted';
}

export interface ReportRejectedEvent extends BaseEvent {
  type: 'report.rejected';
}

export interface ReportResolvedEvent extends BaseEvent {
  type: 'report.resolved';
}

export interface ReportReopenedEvent extends BaseEvent {
  type: 'report.reopened';
}

export interface ReportAssignedEvent extends BaseEvent {
  type: 'report.assigned';
}

export interface ReportUnassignedEvent extends BaseEvent {
  type: 'report.unassigned';
}

export interface ReportCommentedEvent extends BaseEvent {
  type: 'report.commented';
}

export interface ReportRewardedEvent extends BaseEvent {
  type: 'report.rewarded';
}

export interface ReportDuplicateEvent extends BaseEvent {
  type: 'report.duplicate';
}

// Triage Events
export interface TriageStartedEvent extends BaseEvent {
  type: 'triage.started';
}

export interface TriageCompletedEvent extends BaseEvent {
  type: 'triage.completed';
}

export interface TriageFailedEvent extends BaseEvent {
  type: 'triage.failed';
}

export interface TriageReviewedEvent extends BaseEvent {
  type: 'triage.reviewed';
}

export interface TriageOverriddenEvent extends BaseEvent {
  type: 'triage.overridden';
}

// CAI Events
export interface CAISessionStartedEvent extends BaseEvent {
  type: 'cai.session_started';
}

export interface CAISessionCompletedEvent extends BaseEvent {
  type: 'cai.session_completed';
}

export interface CAISessionFailedEvent extends BaseEvent {
  type: 'cai.session_failed';
}

export interface CAISessionCancelledEvent extends BaseEvent {
  type: 'cai.session_cancelled';
}

export interface CAIVulnerabilityFoundEvent extends BaseEvent {
  type: 'cai.vulnerability_found';
}

export interface CAIProgressUpdatedEvent extends BaseEvent {
  type: 'cai.progress_updated';
}

export interface CAIReportGeneratedEvent extends BaseEvent {
  type: 'cai.report_generated';
}

// Notification Events
export interface NotificationCreatedEvent extends BaseEvent {
  type: 'notification.created';
}

export interface NotificationReadEvent extends BaseEvent {
  type: 'notification.read';
}

export interface NotificationDeletedEvent extends BaseEvent {
  type: 'notification.deleted';
}

// System Events
export interface SystemMaintenanceStartedEvent extends BaseEvent {
  type: 'system.maintenance_started';
}

export interface SystemMaintenanceEndedEvent extends BaseEvent {
  type: 'system.maintenance_ended';
}

export interface SystemBackupCompletedEvent extends BaseEvent {
  type: 'system.backup_completed';
}

export interface SystemBackupFailedEvent extends BaseEvent {
  type: 'system.backup_failed';
}

export interface SystemHealthCheckEvent extends BaseEvent {
  type: 'system.health_check';
}

export interface SystemErrorEvent extends BaseEvent {
  type: 'system.error';
}

export interface SystemWarningEvent extends BaseEvent {
  type: 'system.warning';
}

// Security Events
export interface SecurityLoginAttemptEvent extends BaseEvent {
  type: 'security.login_attempt';
}

export interface SecurityLoginFailedEvent extends BaseEvent {
  type: 'security.login_failed';
}

export interface SecurityPasswordResetEvent extends BaseEvent {
  type: 'security.password_reset';
}

export interface SecuritySuspiciousActivityEvent extends BaseEvent {
  type: 'security.suspicious_activity';
}

export interface SecurityAccountLockedEvent extends BaseEvent {
  type: 'security.account_locked';
}

export interface SecurityAccountUnlockedEvent extends BaseEvent {
  type: 'security.account_unlocked';
}

export interface SecurityPermissionChangedEvent extends BaseEvent {
  type: 'security.permission_changed';
}

// Payment Events
export interface PaymentProcessedEvent extends BaseEvent {
  type: 'payment.processed';
}

export interface PaymentFailedEvent extends BaseEvent {
  type: 'payment.failed';
}

export interface PaymentRefundedEvent extends BaseEvent {
  type: 'payment.refunded';
}

export interface PaymentDisputedEvent extends BaseEvent {
  type: 'payment.disputed';
}

export interface PaymentMethodAddedEvent extends BaseEvent {
  type: 'payment.method_added';
}

export interface PaymentMethodRemovedEvent extends BaseEvent {
  type: 'payment.method_removed';
}

// Integration Events
export interface IntegrationConnectedEvent extends BaseEvent {
  type: 'integration.connected';
}

export interface IntegrationDisconnectedEvent extends BaseEvent {
  type: 'integration.disconnected';
}

export interface IntegrationSyncStartedEvent extends BaseEvent {
  type: 'integration.sync_started';
}

export interface IntegrationSyncCompletedEvent extends BaseEvent {
  type: 'integration.sync_completed';
}

export interface IntegrationSyncFailedEvent extends BaseEvent {
  type: 'integration.sync_failed';
}

export interface IntegrationWebhookReceivedEvent extends BaseEvent {
  type: 'integration.webhook_received';
}

// Union Types for Event Handling
export type UserEvent =
  | UserCreatedEvent
  | UserUpdatedEvent
  | UserDeletedEvent
  | UserLoginEvent
  | UserLogoutEvent
  | UserPasswordChangedEvent
  | UserEmailVerifiedEvent
  | UserProfileCompletedEvent;

export type CompanyEvent =
  | CompanyCreatedEvent
  | CompanyUpdatedEvent
  | CompanyDeletedEvent
  | CompanyVerifiedEvent
  | CompanySubscriptionChangedEvent;

export type ProgramEvent =
  | ProgramCreatedEvent
  | ProgramUpdatedEvent
  | ProgramDeletedEvent
  | ProgramPublishedEvent
  | ProgramUnpublishedEvent
  | ProgramStartedEvent
  | ProgramEndedEvent
  | ProgramJoinedEvent
  | ProgramLeftEvent;

export type ReportEvent =
  | ReportCreatedEvent
  | ReportUpdatedEvent
  | ReportDeletedEvent
  | ReportSubmittedEvent
  | ReportTriagedEvent
  | ReportAcceptedEvent
  | ReportRejectedEvent
  | ReportResolvedEvent
  | ReportReopenedEvent
  | ReportAssignedEvent
  | ReportUnassignedEvent
  | ReportCommentedEvent
  | ReportRewardedEvent
  | ReportDuplicateEvent;

export type TriageEvent =
  | TriageStartedEvent
  | TriageCompletedEvent
  | TriageFailedEvent
  | TriageReviewedEvent
  | TriageOverriddenEvent;

export type CAIEvent =
  | CAISessionStartedEvent
  | CAISessionCompletedEvent
  | CAISessionFailedEvent
  | CAISessionCancelledEvent
  | CAIVulnerabilityFoundEvent
  | CAIProgressUpdatedEvent
  | CAIReportGeneratedEvent;

export type NotificationEvent =
  | NotificationCreatedEvent
  | NotificationReadEvent
  | NotificationDeletedEvent;

export type SystemEvent =
  | SystemMaintenanceStartedEvent
  | SystemMaintenanceEndedEvent
  | SystemBackupCompletedEvent
  | SystemBackupFailedEvent
  | SystemHealthCheckEvent
  | SystemErrorEvent
  | SystemWarningEvent;

export type SecurityEvent =
  | SecurityLoginAttemptEvent
  | SecurityLoginFailedEvent
  | SecurityPasswordResetEvent
  | SecuritySuspiciousActivityEvent
  | SecurityAccountLockedEvent
  | SecurityAccountUnlockedEvent
  | SecurityPermissionChangedEvent;

export type PaymentEvent =
  | PaymentProcessedEvent
  | PaymentFailedEvent
  | PaymentRefundedEvent
  | PaymentDisputedEvent
  | PaymentMethodAddedEvent
  | PaymentMethodRemovedEvent;

export type IntegrationEvent =
  | IntegrationConnectedEvent
  | IntegrationDisconnectedEvent
  | IntegrationSyncStartedEvent
  | IntegrationSyncCompletedEvent
  | IntegrationSyncFailedEvent
  | IntegrationWebhookReceivedEvent;

export type AllEvents =
  | UserEvent
  | CompanyEvent
  | ProgramEvent
  | ReportEvent
  | TriageEvent
  | CAIEvent
  | NotificationEvent
  | SystemEvent
  | SecurityEvent
  | PaymentEvent
  | IntegrationEvent;

// Event Handler Types
export type EventHandler<T extends BaseEvent = BaseEvent> = (
  payload: EventPayload<T>
) => Promise<void> | void;

export type EventHandlerMap = {
  [K in AllEvents['type']]?: EventHandler<Extract<AllEvents, { type: K }>>;
};

// Event Emitter Interface
export interface EventEmitter {
  emit<T extends BaseEvent>(event: T, data: any, previous?: any): Promise<void>;
  on<T extends BaseEvent['type']>(
    eventType: T,
    handler: EventHandler<Extract<AllEvents, { type: T }>>
  ): void;
  off<T extends BaseEvent['type']>(
    eventType: T,
    handler: EventHandler<Extract<AllEvents, { type: T }>>
  ): void;
  once<T extends BaseEvent['type']>(
    eventType: T,
    handler: EventHandler<Extract<AllEvents, { type: T }>>
  ): void;
}

// Event Store Interface
export interface EventStore {
  save(event: BaseEvent, data: any): Promise<void>;
  getEvents(
    filters: {
      type?: string;
      userId?: string;
      companyId?: string;
      from?: Date;
      to?: Date;
    },
    pagination?: {
      page: number;
      limit: number;
    }
  ): Promise<{
    events: Array<EventPayload>;
    total: number;
  }>;
  getEventsByEntity(
    entityType: string,
    entityId: string,
    pagination?: {
      page: number;
      limit: number;
    }
  ): Promise<{
    events: Array<EventPayload>;
    total: number;
  }>;
}
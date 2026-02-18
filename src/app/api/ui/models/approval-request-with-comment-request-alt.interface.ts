import { ApprovalRequestGetOrCreateRequestAlt } from './approval-request-get-or-create-request-alt.interface';

export type ApprovalRequestWithCommentRequestAlt = ApprovalRequestGetOrCreateRequestAlt & { 'Comment'?: string | null; };

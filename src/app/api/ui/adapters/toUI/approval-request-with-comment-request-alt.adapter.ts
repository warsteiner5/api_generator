import { ApiApprovalRequestWithCommentRequestAltDto } from '../../../swagger/models/api-approval-request-with-comment-request';
import { ApprovalRequestWithCommentRequestAlt } from '../../models/approval-request-with-comment-request-alt.interface';

export function adaptApprovalRequestWithCommentRequestAltToUI(source?: ApiApprovalRequestWithCommentRequestAltDto | null): ApprovalRequestWithCommentRequestAlt {
  return (source ?? {}) as ApprovalRequestWithCommentRequestAlt;
}

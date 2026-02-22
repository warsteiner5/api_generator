import { ApprovalRequestWithCommentRequestAlt } from '../../models/approval-request-with-comment-request-alt.interface';
import { ApiApprovalRequestWithCommentRequestAltDto } from '../../../swagger/models/api-approval-request-with-comment-request';

export const apiApprovalRequestWithCommentRequestAltDtoAdapter = (source?: ApprovalRequestWithCommentRequestAlt | null): ApiApprovalRequestWithCommentRequestAltDto => {
  return (source ?? {}) as ApiApprovalRequestWithCommentRequestAltDto;
}

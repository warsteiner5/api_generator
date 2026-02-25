import { ApiApprovalRequestWithCommentRequestAltDto } from '../../../swagger/models/api-approval-request-with-comment-request';
import { ApprovalRequestWithCommentRequestAlt } from '../../models/approval-request-with-comment-request-alt.interface';
import { approvalRequestGetOrCreateRequestAltAdapter } from './approval-request-get-or-create-request-alt.adapter';

export const approvalRequestWithCommentRequestAltAdapter = (source?: ApiApprovalRequestWithCommentRequestAltDto | null): ApprovalRequestWithCommentRequestAlt => {
  return {
    ...approvalRequestGetOrCreateRequestAltAdapter(source as unknown as Parameters<typeof approvalRequestGetOrCreateRequestAltAdapter>[0]),
    comment: source?.Comment,
  };
}

import { ApprovalRequestWithCommentRequestAlt } from '../../models/approval-request-with-comment-request-alt.interface';
import { ApiApprovalRequestWithCommentRequestAltDto } from '../../../swagger/models/api-approval-request-with-comment-request';
import { apiApprovalRequestGetOrCreateRequestAltDtoAdapter } from './api-approval-request-get-or-create-request.adapter';

export const apiApprovalRequestWithCommentRequestAltDtoAdapter = (source?: ApprovalRequestWithCommentRequestAlt | null): ApiApprovalRequestWithCommentRequestAltDto => {
  return {
    ...apiApprovalRequestGetOrCreateRequestAltDtoAdapter(source as unknown as Parameters<typeof apiApprovalRequestGetOrCreateRequestAltDtoAdapter>[0]),
    Comment: source?.comment,
  };
}

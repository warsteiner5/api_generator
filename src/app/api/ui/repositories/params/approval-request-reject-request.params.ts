import { ApprovalRequestRejectRequest$Params } from '../../../swagger/fn/approval-request/approval-request-reject-request';
import { ApprovalRequestWithCommentRequestAlt } from '../../models/approval-request-with-comment-request-alt.interface';
import { apiApprovalRequestWithCommentRequestAltDtoAdapter } from '../../adapters/models/api-approval-request-with-comment-request.adapter';

// @ts-ignore
export interface ApprovalRequestRejectRequestParams {
  body?: ApprovalRequestWithCommentRequestAlt;
}

export function approvalRequestRejectRequestAdapter(params?: ApprovalRequestRejectRequestParams): ApprovalRequestRejectRequest$Params {
  if (!params) {
    return {} as ApprovalRequestRejectRequest$Params;
  }
  return {
      body: apiApprovalRequestWithCommentRequestAltDtoAdapter(params.body),
  };
}

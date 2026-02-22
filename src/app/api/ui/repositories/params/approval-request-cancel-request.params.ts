import { ApprovalRequestCancelRequest$Params } from '../../../swagger/fn/approval-request/approval-request-cancel-request';
import { ApprovalRequestWithCommentRequestAlt } from '../../models/approval-request-with-comment-request-alt.interface';
import { apiApprovalRequestWithCommentRequestAltDtoAdapter } from '../../adapters/models/api-approval-request-with-comment-request.adapter';

// @ts-ignore
export interface ApprovalRequestCancelRequestParams {
  body?: ApprovalRequestWithCommentRequestAlt;
}

export function approvalRequestCancelRequestAdapter(params?: ApprovalRequestCancelRequestParams): ApprovalRequestCancelRequest$Params {
  if (!params) {
    return {} as ApprovalRequestCancelRequest$Params;
  }
  return {
      body: apiApprovalRequestWithCommentRequestAltDtoAdapter(params.body),
  };
}

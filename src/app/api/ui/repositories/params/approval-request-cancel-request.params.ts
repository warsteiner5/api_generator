import { ApprovalRequestCancelRequest$Params } from '../../../swagger/fn/approval-request/approval-request-cancel-request';
import { ApprovalRequestWithCommentRequestAlt } from '../../models/approval-request-with-comment-request-alt.interface';
import { adaptApiApprovalRequestWithCommentRequestAltDto } from '../../adapters/toDto/api-approval-request-with-comment-request.adapter';

export interface ApprovalRequestCancelRequestParams {
  body?: ApprovalRequestWithCommentRequestAlt;
}

export const approvalRequestCancelRequestParamsAdapter = {
  adapt(params?: ApprovalRequestCancelRequestParams): ApprovalRequestCancelRequest$Params {
    if (!params) {
      return {} as ApprovalRequestCancelRequest$Params;
    }
    return {
      body: adaptApiApprovalRequestWithCommentRequestAltDto(params.body),
    };
  }
};

import { ApprovalRequestRejectRequest$Params } from '../../../swagger/fn/approval-request/approval-request-reject-request';
import { ApprovalRequestWithCommentRequestAlt } from '../../models/approval-request-with-comment-request-alt.interface';
import { adaptApiApprovalRequestWithCommentRequestAltDto } from '../../adapters/toDto/api-approval-request-with-comment-request.adapter';

export interface ApprovalRequestRejectRequestParams {
  body?: ApprovalRequestWithCommentRequestAlt;
}

export const approvalRequestRejectRequestParamsAdapter = {
  adapt(params?: ApprovalRequestRejectRequestParams): ApprovalRequestRejectRequest$Params {
    if (!params) {
      return {} as ApprovalRequestRejectRequest$Params;
    }
    return {
      body: adaptApiApprovalRequestWithCommentRequestAltDto(params.body),
    };
  }
};

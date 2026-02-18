import { ApprovalRequestApproveRequest$Params } from '../../../swagger/fn/approval-request/approval-request-approve-request';
import { ApprovalRequestGetOrCreateRequestAlt } from '../../models/approval-request-get-or-create-request-alt.interface';
import { adaptApiApprovalRequestGetOrCreateRequestAltDto } from '../../adapters/toDto/api-approval-request-get-or-create-request.adapter';

export interface ApprovalRequestApproveRequestParams {
  body?: ApprovalRequestGetOrCreateRequestAlt;
}

export const approvalRequestApproveRequestParamsAdapter = {
  adapt(params?: ApprovalRequestApproveRequestParams): ApprovalRequestApproveRequest$Params {
    if (!params) {
      return {} as ApprovalRequestApproveRequest$Params;
    }
    return {
      body: adaptApiApprovalRequestGetOrCreateRequestAltDto(params.body),
    };
  }
};

import { ApprovalRequestCreate } from '../../models/approval-request-create.interface';
import { ApprovalRequestSendApprovalRequest$Params } from '../../../swagger/fn/approval-request/approval-request-send-approval-request';
import { adaptApiApprovalRequestCreateDto } from '../../adapters/toDto/api-approval-request-create-dto.adapter';

export interface ApprovalRequestSendApprovalRequestParams {
  body?: ApprovalRequestCreate;
}

export const approvalRequestSendApprovalRequestParamsAdapter = {
  adapt(params?: ApprovalRequestSendApprovalRequestParams): ApprovalRequestSendApprovalRequest$Params {
    if (!params) {
      return {} as ApprovalRequestSendApprovalRequest$Params;
    }
    return {
      body: adaptApiApprovalRequestCreateDto(params.body),
    };
  }
};

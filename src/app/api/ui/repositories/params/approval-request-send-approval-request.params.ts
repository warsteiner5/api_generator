import { ApprovalRequestCreate } from '../../models/approval-request-create.interface';
import { ApprovalRequestSendApprovalRequest$Params } from '../../../swagger/fn/approval-request/approval-request-send-approval-request';
import { apiApprovalRequestCreateDtoAdapter } from '../../adapters/models/api-approval-request-create-dto.adapter';

// @ts-ignore
export interface ApprovalRequestSendApprovalRequestParams {
  body?: ApprovalRequestCreate;
}

export function approvalRequestSendApprovalRequestAdapter(params?: ApprovalRequestSendApprovalRequestParams): ApprovalRequestSendApprovalRequest$Params {
  if (!params) {
    return {} as ApprovalRequestSendApprovalRequest$Params;
  }
  return {
      body: apiApprovalRequestCreateDtoAdapter(params.body),
  };
}

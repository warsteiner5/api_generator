import { ApprovalRequestApproveRequest$Params } from '../../../swagger/fn/approval-request/approval-request-approve-request';
import { ApprovalRequestGetOrCreateRequestAlt } from '../../models/approval-request-get-or-create-request-alt.interface';
import { apiApprovalRequestGetOrCreateRequestAltDtoAdapter } from '../../adapters/models/api-approval-request-get-or-create-request.adapter';

// @ts-ignore
export interface ApprovalRequestApproveRequestParams {
  body?: ApprovalRequestGetOrCreateRequestAlt;
}

export function approvalRequestApproveRequestAdapter(params?: ApprovalRequestApproveRequestParams): ApprovalRequestApproveRequest$Params {
  if (!params) {
    return {} as ApprovalRequestApproveRequest$Params;
  }
  return {
      body: apiApprovalRequestGetOrCreateRequestAltDtoAdapter(params.body),
  };
}

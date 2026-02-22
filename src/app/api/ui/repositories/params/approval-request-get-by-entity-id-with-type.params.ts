import { ApprovalRequestGetByEntityIdWithType$Params } from '../../../swagger/fn/approval-request/approval-request-get-by-entity-id-with-type';
import { ApprovalRequestGetOrCreateRequestAlt } from '../../models/approval-request-get-or-create-request-alt.interface';
import { apiApprovalRequestGetOrCreateRequestAltDtoAdapter } from '../../adapters/models/api-approval-request-get-or-create-request.adapter';

// @ts-ignore
export interface ApprovalRequestGetByEntityIdWithTypeParams {
  body?: ApprovalRequestGetOrCreateRequestAlt;
}

export function approvalRequestGetByEntityIdWithTypeAdapter(params?: ApprovalRequestGetByEntityIdWithTypeParams): ApprovalRequestGetByEntityIdWithType$Params {
  if (!params) {
    return {} as ApprovalRequestGetByEntityIdWithType$Params;
  }
  return {
      body: apiApprovalRequestGetOrCreateRequestAltDtoAdapter(params.body),
  };
}

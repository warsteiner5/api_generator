import { ApprovalRequestGetTradesWithApprovalRequest$Params } from '../../../swagger/fn/approval-request/approval-request-get-trades-with-approval-request';
import { EntitiesWithApprovalRequestFilterAlt } from '../../models/entities-with-approval-request-filter-alt.interface';
import { apiEntitiesWithApprovalRequestFilterAltDtoAdapter } from '../../adapters/models/api-entities-with-approval-request-filter.adapter';

// @ts-ignore
export interface ApprovalRequestGetTradesWithApprovalRequestParams {
  body?: EntitiesWithApprovalRequestFilterAlt;
}

export function approvalRequestGetTradesWithApprovalRequestAdapter(params?: ApprovalRequestGetTradesWithApprovalRequestParams): ApprovalRequestGetTradesWithApprovalRequest$Params {
  if (!params) {
    return {} as ApprovalRequestGetTradesWithApprovalRequest$Params;
  }
  return {
      body: apiEntitiesWithApprovalRequestFilterAltDtoAdapter(params.body),
  };
}

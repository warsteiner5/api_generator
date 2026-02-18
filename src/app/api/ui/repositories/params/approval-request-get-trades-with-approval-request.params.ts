import { ApprovalRequestGetTradesWithApprovalRequest$Params } from '../../../swagger/fn/approval-request/approval-request-get-trades-with-approval-request';
import { EntitiesWithApprovalRequestFilterAlt } from '../../models/entities-with-approval-request-filter-alt.interface';
import { adaptApiEntitiesWithApprovalRequestFilterAltDto } from '../../adapters/toDto/api-entities-with-approval-request-filter.adapter';

export interface ApprovalRequestGetTradesWithApprovalRequestParams {
  body?: EntitiesWithApprovalRequestFilterAlt;
}

export const approvalRequestGetTradesWithApprovalRequestParamsAdapter = {
  adapt(params?: ApprovalRequestGetTradesWithApprovalRequestParams): ApprovalRequestGetTradesWithApprovalRequest$Params {
    if (!params) {
      return {} as ApprovalRequestGetTradesWithApprovalRequest$Params;
    }
    return {
      body: adaptApiEntitiesWithApprovalRequestFilterAltDto(params.body),
    };
  }
};

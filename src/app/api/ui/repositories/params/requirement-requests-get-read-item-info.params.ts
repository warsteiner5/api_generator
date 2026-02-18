import { RequirementRequestsGetReadItemInfo$Params } from '../../../swagger/fn/requirement-requests/requirement-requests-get-read-item-info';

export interface RequirementRequestsGetReadItemInfoParams {
  requirementRequestId: number;
  itemId: number;
}

export const requirementRequestsGetReadItemInfoParamsAdapter = {
  adapt(params?: RequirementRequestsGetReadItemInfoParams): RequirementRequestsGetReadItemInfo$Params {
    if (!params) {
      return {} as RequirementRequestsGetReadItemInfo$Params;
    }
    return {
      requirementRequestId: params.requirementRequestId,
      itemId: params.itemId,
    };
  }
};

import { RequirementRequestsGetPriceLists$Params } from '../../../swagger/fn/requirement-requests/requirement-requests-get-price-lists';

export interface RequirementRequestsGetPriceListsParams {
  requirementRequestId: number;
}

export const requirementRequestsGetPriceListsParamsAdapter = {
  adapt(params?: RequirementRequestsGetPriceListsParams): RequirementRequestsGetPriceLists$Params {
    if (!params) {
      return {} as RequirementRequestsGetPriceLists$Params;
    }
    return {
      requirementRequestId: params.requirementRequestId,
    };
  }
};

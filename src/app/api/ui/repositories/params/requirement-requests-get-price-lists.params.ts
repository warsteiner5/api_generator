import { RequirementRequestsGetPriceLists$Params } from '../../../swagger/fn/requirement-requests/requirement-requests-get-price-lists';

// @ts-ignore
export interface RequirementRequestsGetPriceListsParams {
  requirementRequestId: number;
}

export function requirementRequestsGetPriceListsAdapter(params?: RequirementRequestsGetPriceListsParams): RequirementRequestsGetPriceLists$Params {
  if (!params) {
    return {} as RequirementRequestsGetPriceLists$Params;
  }
  return {
      requirementRequestId: params.requirementRequestId,
  };
}

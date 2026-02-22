import { RequirementRequestsGetCompetitiveListMinPrices$Params } from '../../../swagger/fn/requirement-requests/requirement-requests-get-competitive-list-min-prices';

// @ts-ignore
export interface RequirementRequestsGetCompetitiveListMinPricesParams {
  requirementRequestId: number;
  kladrCode: string;
}

export function requirementRequestsGetCompetitiveListMinPricesAdapter(params?: RequirementRequestsGetCompetitiveListMinPricesParams): RequirementRequestsGetCompetitiveListMinPrices$Params {
  if (!params) {
    return {} as RequirementRequestsGetCompetitiveListMinPrices$Params;
  }
  return {
      requirementRequestId: params.requirementRequestId,
      kladrCode: params.kladrCode,
  };
}

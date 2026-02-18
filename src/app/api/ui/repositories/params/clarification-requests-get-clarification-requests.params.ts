import { ClarificationRequestsGetClarificationRequests$Params } from '../../../swagger/fn/clarification-requests/clarification-requests-get-clarification-requests';

export interface ClarificationRequestsGetClarificationRequestsParams {
  tradeId: number;
}

export const clarificationRequestsGetClarificationRequestsParamsAdapter = {
  adapt(params?: ClarificationRequestsGetClarificationRequestsParams): ClarificationRequestsGetClarificationRequests$Params {
    if (!params) {
      return {} as ClarificationRequestsGetClarificationRequests$Params;
    }
    return {
      tradeId: params.tradeId,
    };
  }
};

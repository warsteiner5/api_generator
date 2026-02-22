import { ClarificationRequestsGetClarificationRequests$Params } from '../../../swagger/fn/clarification-requests/clarification-requests-get-clarification-requests';

// @ts-ignore
export interface ClarificationRequestsGetClarificationRequestsParams {
  tradeId: number;
}

export function clarificationRequestsGetClarificationRequestsAdapter(params?: ClarificationRequestsGetClarificationRequestsParams): ClarificationRequestsGetClarificationRequests$Params {
  if (!params) {
    return {} as ClarificationRequestsGetClarificationRequests$Params;
  }
  return {
      tradeId: params.tradeId,
  };
}

import { ClarificationRequestsGetTradeParticipantList$Params } from '../../../swagger/fn/clarification-requests/clarification-requests-get-trade-participant-list';

// @ts-ignore
export interface ClarificationRequestsGetTradeParticipantListParams {
  tradeId: number;
}

export function clarificationRequestsGetTradeParticipantListAdapter(params?: ClarificationRequestsGetTradeParticipantListParams): ClarificationRequestsGetTradeParticipantList$Params {
  if (!params) {
    return {} as ClarificationRequestsGetTradeParticipantList$Params;
  }
  return {
      tradeId: params.tradeId,
  };
}

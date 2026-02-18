import { ClarificationRequestsGetTradeParticipantList$Params } from '../../../swagger/fn/clarification-requests/clarification-requests-get-trade-participant-list';

export interface ClarificationRequestsGetTradeParticipantListParams {
  tradeId: number;
}

export const clarificationRequestsGetTradeParticipantListParamsAdapter = {
  adapt(params?: ClarificationRequestsGetTradeParticipantListParams): ClarificationRequestsGetTradeParticipantList$Params {
    if (!params) {
      return {} as ClarificationRequestsGetTradeParticipantList$Params;
    }
    return {
      tradeId: params.tradeId,
    };
  }
};

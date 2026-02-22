import { TradesAddMmoParticipantMissedSigningTimeSystemMessage$Params } from '../../../swagger/fn/trades/trades-add-mmo-participant-missed-signing-time-system-message';

// @ts-ignore
export interface TradesAddMmoParticipantMissedSigningTimeSystemMessageParams {
  tradeId: number;
  discussionOwnerId: number;
}

export function tradesAddMmoParticipantMissedSigningTimeSystemMessageAdapter(params?: TradesAddMmoParticipantMissedSigningTimeSystemMessageParams): TradesAddMmoParticipantMissedSigningTimeSystemMessage$Params {
  if (!params) {
    return {} as TradesAddMmoParticipantMissedSigningTimeSystemMessage$Params;
  }
  return {
      tradeId: params.tradeId,
      discussionOwnerId: params.discussionOwnerId,
  };
}

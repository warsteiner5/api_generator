import { TradeGetTradesForParticipant$Params } from '../../../swagger/fn/trade/trade-get-trades-for-participant';
import { TradesFilterObjectForParticipantAlt } from '../../models/trades-filter-object-for-participant-alt.interface';
import { apiTradesFilterObjectForParticipantAltDtoAdapter } from '../../adapters/models/api-trades-filter-object-for-participant.adapter';

// @ts-ignore
export interface TradeGetTradesForParticipantParams {
  body?: TradesFilterObjectForParticipantAlt;
}

export function tradeGetTradesForParticipantAdapter(params?: TradeGetTradesForParticipantParams): TradeGetTradesForParticipant$Params {
  if (!params) {
    return {} as TradeGetTradesForParticipant$Params;
  }
  return {
      body: apiTradesFilterObjectForParticipantAltDtoAdapter(params.body),
  };
}

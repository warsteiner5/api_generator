import { TradeGetTradesForParticipant$Params } from '../../../swagger/fn/trade/trade-get-trades-for-participant';
import { TradesFilterObjectForParticipantAlt } from '../../models/trades-filter-object-for-participant-alt.interface';
import { adaptApiTradesFilterObjectForParticipantAltDto } from '../../adapters/toDto/api-trades-filter-object-for-participant.adapter';

export interface TradeGetTradesForParticipantParams {
  body?: TradesFilterObjectForParticipantAlt;
}

export const tradeGetTradesForParticipantParamsAdapter = {
  adapt(params?: TradeGetTradesForParticipantParams): TradeGetTradesForParticipant$Params {
    if (!params) {
      return {} as TradeGetTradesForParticipant$Params;
    }
    return {
      body: adaptApiTradesFilterObjectForParticipantAltDto(params.body),
    };
  }
};

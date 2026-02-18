import { TradeGetTradesForAnonymous$Params } from '../../../swagger/fn/trade/trade-get-trades-for-anonymous';
import { TradesFilterObjectForAnonymousAlt } from '../../models/trades-filter-object-for-anonymous-alt.interface';
import { adaptApiTradesFilterObjectForAnonymousAltDto } from '../../adapters/toDto/api-trades-filter-object-for-anonymous.adapter';

export interface TradeGetTradesForAnonymousParams {
  body?: TradesFilterObjectForAnonymousAlt;
}

export const tradeGetTradesForAnonymousParamsAdapter = {
  adapt(params?: TradeGetTradesForAnonymousParams): TradeGetTradesForAnonymous$Params {
    if (!params) {
      return {} as TradeGetTradesForAnonymous$Params;
    }
    return {
      body: adaptApiTradesFilterObjectForAnonymousAltDto(params.body),
    };
  }
};

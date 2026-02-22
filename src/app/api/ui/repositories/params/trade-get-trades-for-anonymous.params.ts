import { TradeGetTradesForAnonymous$Params } from '../../../swagger/fn/trade/trade-get-trades-for-anonymous';
import { TradesFilterObjectForAnonymousAlt } from '../../models/trades-filter-object-for-anonymous-alt.interface';
import { apiTradesFilterObjectForAnonymousAltDtoAdapter } from '../../adapters/models/api-trades-filter-object-for-anonymous.adapter';

// @ts-ignore
export interface TradeGetTradesForAnonymousParams {
  body?: TradesFilterObjectForAnonymousAlt;
}

export function tradeGetTradesForAnonymousAdapter(params?: TradeGetTradesForAnonymousParams): TradeGetTradesForAnonymous$Params {
  if (!params) {
    return {} as TradeGetTradesForAnonymous$Params;
  }
  return {
      body: apiTradesFilterObjectForAnonymousAltDtoAdapter(params.body),
  };
}

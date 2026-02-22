import { TradeSetTradeNotTookPlace$Params } from '../../../swagger/fn/trade/trade-set-trade-not-took-place';

// @ts-ignore
export interface TradeSetTradeNotTookPlaceParams {
  body?: number;
}

export function tradeSetTradeNotTookPlaceAdapter(params?: TradeSetTradeNotTookPlaceParams): TradeSetTradeNotTookPlace$Params {
  if (!params) {
    return {} as TradeSetTradeNotTookPlace$Params;
  }
  return {
      body: params.body,
  };
}

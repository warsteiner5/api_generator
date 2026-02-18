import { TradeSetTradeNotTookPlace$Params } from '../../../swagger/fn/trade/trade-set-trade-not-took-place';

export interface TradeSetTradeNotTookPlaceParams {
  body?: number;
}

export const tradeSetTradeNotTookPlaceParamsAdapter = {
  adapt(params?: TradeSetTradeNotTookPlaceParams): TradeSetTradeNotTookPlace$Params {
    if (!params) {
      return {} as TradeSetTradeNotTookPlace$Params;
    }
    return {
      body: params.body,
    };
  }
};

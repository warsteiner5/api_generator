import { TradeGetFullTradeInfo$Params } from '../../../swagger/fn/trade/trade-get-full-trade-info';

export interface TradeGetFullTradeInfoParams {
  id: number;
}

export const tradeGetFullTradeInfoParamsAdapter = {
  adapt(params?: TradeGetFullTradeInfoParams): TradeGetFullTradeInfo$Params {
    if (!params) {
      return {} as TradeGetFullTradeInfo$Params;
    }
    return {
      id: params.id,
    };
  }
};

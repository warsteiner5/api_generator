import { TradeGetFullTradeInfo$Params } from '../../../swagger/fn/trade/trade-get-full-trade-info';

// @ts-ignore
export interface TradeGetFullTradeInfoParams {
  id: number;
}

export function tradeGetFullTradeInfoAdapter(params?: TradeGetFullTradeInfoParams): TradeGetFullTradeInfo$Params {
  if (!params) {
    return {} as TradeGetFullTradeInfo$Params;
  }
  return {
      id: params.id,
  };
}

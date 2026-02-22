import { TradeIsTradeApplicationFromPp$Params } from '../../../swagger/fn/trade/trade-is-trade-application-from-pp';

// @ts-ignore
export interface TradeIsTradeApplicationFromPpParams {
  tradeLotApplicationId: number;
}

export function tradeIsTradeApplicationFromPpAdapter(params?: TradeIsTradeApplicationFromPpParams): TradeIsTradeApplicationFromPp$Params {
  if (!params) {
    return {} as TradeIsTradeApplicationFromPp$Params;
  }
  return {
      tradeLotApplicationId: params.tradeLotApplicationId,
  };
}

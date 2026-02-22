import { TradeCompleteTrade$Params } from '../../../swagger/fn/trade/trade-complete-trade';

// @ts-ignore
export interface TradeCompleteTradeParams {
  tradeId: number;
}

export function tradeCompleteTradeAdapter(params?: TradeCompleteTradeParams): TradeCompleteTrade$Params {
  if (!params) {
    return {} as TradeCompleteTrade$Params;
  }
  return {
      tradeId: params.tradeId,
  };
}

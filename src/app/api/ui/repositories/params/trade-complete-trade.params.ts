import { TradeCompleteTrade$Params } from '../../../swagger/fn/trade/trade-complete-trade';

export interface TradeCompleteTradeParams {
  tradeId: number;
}

export const tradeCompleteTradeParamsAdapter = {
  adapt(params?: TradeCompleteTradeParams): TradeCompleteTrade$Params {
    if (!params) {
      return {} as TradeCompleteTrade$Params;
    }
    return {
      tradeId: params.tradeId,
    };
  }
};

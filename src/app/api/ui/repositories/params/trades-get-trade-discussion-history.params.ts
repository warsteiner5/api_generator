import { TradesGetTradeDiscussionHistory$Params } from '../../../swagger/fn/trades/trades-get-trade-discussion-history';

export interface TradesGetTradeDiscussionHistoryParams {
  tradeId: number;
}

export const tradesGetTradeDiscussionHistoryParamsAdapter = {
  adapt(params?: TradesGetTradeDiscussionHistoryParams): TradesGetTradeDiscussionHistory$Params {
    if (!params) {
      return {} as TradesGetTradeDiscussionHistory$Params;
    }
    return {
      tradeId: params.tradeId,
    };
  }
};

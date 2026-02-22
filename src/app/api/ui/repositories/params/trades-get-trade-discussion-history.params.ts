import { TradesGetTradeDiscussionHistory$Params } from '../../../swagger/fn/trades/trades-get-trade-discussion-history';

// @ts-ignore
export interface TradesGetTradeDiscussionHistoryParams {
  tradeId: number;
}

export function tradesGetTradeDiscussionHistoryAdapter(params?: TradesGetTradeDiscussionHistoryParams): TradesGetTradeDiscussionHistory$Params {
  if (!params) {
    return {} as TradesGetTradeDiscussionHistory$Params;
  }
  return {
      tradeId: params.tradeId,
  };
}

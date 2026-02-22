import { TradeProtocolsGetDiscussionHistory$Params } from '../../../swagger/fn/trade-protocols/trade-protocols-get-discussion-history';

// @ts-ignore
export interface TradeProtocolsGetDiscussionHistoryParams {
  tradeId: number;
}

export function tradeProtocolsGetDiscussionHistoryAdapter(params?: TradeProtocolsGetDiscussionHistoryParams): TradeProtocolsGetDiscussionHistory$Params {
  if (!params) {
    return {} as TradeProtocolsGetDiscussionHistory$Params;
  }
  return {
      tradeId: params.tradeId,
  };
}

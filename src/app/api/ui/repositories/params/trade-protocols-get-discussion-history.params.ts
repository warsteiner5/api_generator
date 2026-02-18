import { TradeProtocolsGetDiscussionHistory$Params } from '../../../swagger/fn/trade-protocols/trade-protocols-get-discussion-history';

export interface TradeProtocolsGetDiscussionHistoryParams {
  tradeId: number;
}

export const tradeProtocolsGetDiscussionHistoryParamsAdapter = {
  adapt(params?: TradeProtocolsGetDiscussionHistoryParams): TradeProtocolsGetDiscussionHistory$Params {
    if (!params) {
      return {} as TradeProtocolsGetDiscussionHistory$Params;
    }
    return {
      tradeId: params.tradeId,
    };
  }
};

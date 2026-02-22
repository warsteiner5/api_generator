import { TradeGetTradeShortInfoById$Params } from '../../../swagger/fn/trade/trade-get-trade-short-info-by-id';

// @ts-ignore
export interface TradeGetTradeShortInfoByIdParams {
  id: number;
}

export function tradeGetTradeShortInfoByIdAdapter(params?: TradeGetTradeShortInfoByIdParams): TradeGetTradeShortInfoById$Params {
  if (!params) {
    return {} as TradeGetTradeShortInfoById$Params;
  }
  return {
      id: params.id,
  };
}

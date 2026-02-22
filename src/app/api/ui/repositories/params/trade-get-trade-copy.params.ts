import { TradeGetTradeCopy$Params } from '../../../swagger/fn/trade/trade-get-trade-copy';

// @ts-ignore
export interface TradeGetTradeCopyParams {
  id: number;
}

export function tradeGetTradeCopyAdapter(params?: TradeGetTradeCopyParams): TradeGetTradeCopy$Params {
  if (!params) {
    return {} as TradeGetTradeCopy$Params;
  }
  return {
      id: params.id,
  };
}

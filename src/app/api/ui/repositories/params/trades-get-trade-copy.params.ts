import { TradesGetTradeCopy$Params } from '../../../swagger/fn/trades/trades-get-trade-copy';

// @ts-ignore
export interface TradesGetTradeCopyParams {
  id: number;
}

export function tradesGetTradeCopyAdapter(params?: TradesGetTradeCopyParams): TradesGetTradeCopy$Params {
  if (!params) {
    return {} as TradesGetTradeCopy$Params;
  }
  return {
      id: params.id,
  };
}

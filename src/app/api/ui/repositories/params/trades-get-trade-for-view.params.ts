import { TradesGetTradeForView$Params } from '../../../swagger/fn/trades/trades-get-trade-for-view';

// @ts-ignore
export interface TradesGetTradeForViewParams {
  id: number;
}

export function tradesGetTradeForViewAdapter(params?: TradesGetTradeForViewParams): TradesGetTradeForView$Params {
  if (!params) {
    return {} as TradesGetTradeForView$Params;
  }
  return {
      id: params.id,
  };
}

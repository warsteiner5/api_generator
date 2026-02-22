import { TradesGetApplicationsByTradeId$Params } from '../../../swagger/fn/trades/trades-get-applications-by-trade-id';

// @ts-ignore
export interface TradesGetApplicationsByTradeIdParams {
  id: number;
}

export function tradesGetApplicationsByTradeIdAdapter(params?: TradesGetApplicationsByTradeIdParams): TradesGetApplicationsByTradeId$Params {
  if (!params) {
    return {} as TradesGetApplicationsByTradeId$Params;
  }
  return {
      id: params.id,
  };
}

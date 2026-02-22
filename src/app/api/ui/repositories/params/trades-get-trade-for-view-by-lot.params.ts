import { TradesGetTradeForViewByLot$Params } from '../../../swagger/fn/trades/trades-get-trade-for-view-by-lot';

// @ts-ignore
export interface TradesGetTradeForViewByLotParams {
  id: number;
}

export function tradesGetTradeForViewByLotAdapter(params?: TradesGetTradeForViewByLotParams): TradesGetTradeForViewByLot$Params {
  if (!params) {
    return {} as TradesGetTradeForViewByLot$Params;
  }
  return {
      id: params.id,
  };
}

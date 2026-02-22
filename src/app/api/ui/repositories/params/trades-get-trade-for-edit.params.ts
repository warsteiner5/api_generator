import { TradesGetTradeForEdit$Params } from '../../../swagger/fn/trades/trades-get-trade-for-edit';

// @ts-ignore
export interface TradesGetTradeForEditParams {
  id: number;
}

export function tradesGetTradeForEditAdapter(params?: TradesGetTradeForEditParams): TradesGetTradeForEdit$Params {
  if (!params) {
    return {} as TradesGetTradeForEdit$Params;
  }
  return {
      id: params.id,
  };
}

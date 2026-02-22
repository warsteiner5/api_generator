import { TradeGetTradeForEdit$Params } from '../../../swagger/fn/trade/trade-get-trade-for-edit';

// @ts-ignore
export interface TradeGetTradeForEditParams {
  id: number;
}

export function tradeGetTradeForEditAdapter(params?: TradeGetTradeForEditParams): TradeGetTradeForEdit$Params {
  if (!params) {
    return {} as TradeGetTradeForEdit$Params;
  }
  return {
      id: params.id,
  };
}

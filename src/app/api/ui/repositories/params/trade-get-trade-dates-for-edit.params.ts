import { TradeGetTradeDatesForEdit$Params } from '../../../swagger/fn/trade/trade-get-trade-dates-for-edit';

// @ts-ignore
export interface TradeGetTradeDatesForEditParams {
  id: number;
}

export function tradeGetTradeDatesForEditAdapter(params?: TradeGetTradeDatesForEditParams): TradeGetTradeDatesForEdit$Params {
  if (!params) {
    return {} as TradeGetTradeDatesForEdit$Params;
  }
  return {
      id: params.id,
  };
}

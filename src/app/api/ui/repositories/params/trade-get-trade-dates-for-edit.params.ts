import { TradeGetTradeDatesForEdit$Params } from '../../../swagger/fn/trade/trade-get-trade-dates-for-edit';

export interface TradeGetTradeDatesForEditParams {
  id: number;
}

export const tradeGetTradeDatesForEditParamsAdapter = {
  adapt(params?: TradeGetTradeDatesForEditParams): TradeGetTradeDatesForEdit$Params {
    if (!params) {
      return {} as TradeGetTradeDatesForEdit$Params;
    }
    return {
      id: params.id,
    };
  }
};

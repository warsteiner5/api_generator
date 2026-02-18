import { TradeGetTradeForEdit$Params } from '../../../swagger/fn/trade/trade-get-trade-for-edit';

export interface TradeGetTradeForEditParams {
  id: number;
}

export const tradeGetTradeForEditParamsAdapter = {
  adapt(params?: TradeGetTradeForEditParams): TradeGetTradeForEdit$Params {
    if (!params) {
      return {} as TradeGetTradeForEdit$Params;
    }
    return {
      id: params.id,
    };
  }
};

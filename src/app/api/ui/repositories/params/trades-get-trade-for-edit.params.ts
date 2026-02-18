import { TradesGetTradeForEdit$Params } from '../../../swagger/fn/trades/trades-get-trade-for-edit';

export interface TradesGetTradeForEditParams {
  id: number;
}

export const tradesGetTradeForEditParamsAdapter = {
  adapt(params?: TradesGetTradeForEditParams): TradesGetTradeForEdit$Params {
    if (!params) {
      return {} as TradesGetTradeForEdit$Params;
    }
    return {
      id: params.id,
    };
  }
};

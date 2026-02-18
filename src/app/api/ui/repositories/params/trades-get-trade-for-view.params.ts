import { TradesGetTradeForView$Params } from '../../../swagger/fn/trades/trades-get-trade-for-view';

export interface TradesGetTradeForViewParams {
  id: number;
}

export const tradesGetTradeForViewParamsAdapter = {
  adapt(params?: TradesGetTradeForViewParams): TradesGetTradeForView$Params {
    if (!params) {
      return {} as TradesGetTradeForView$Params;
    }
    return {
      id: params.id,
    };
  }
};

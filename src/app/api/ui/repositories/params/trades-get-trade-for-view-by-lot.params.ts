import { TradesGetTradeForViewByLot$Params } from '../../../swagger/fn/trades/trades-get-trade-for-view-by-lot';

export interface TradesGetTradeForViewByLotParams {
  id: number;
}

export const tradesGetTradeForViewByLotParamsAdapter = {
  adapt(params?: TradesGetTradeForViewByLotParams): TradesGetTradeForViewByLot$Params {
    if (!params) {
      return {} as TradesGetTradeForViewByLot$Params;
    }
    return {
      id: params.id,
    };
  }
};

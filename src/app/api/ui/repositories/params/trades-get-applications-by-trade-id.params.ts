import { TradesGetApplicationsByTradeId$Params } from '../../../swagger/fn/trades/trades-get-applications-by-trade-id';

export interface TradesGetApplicationsByTradeIdParams {
  id: number;
}

export const tradesGetApplicationsByTradeIdParamsAdapter = {
  adapt(params?: TradesGetApplicationsByTradeIdParams): TradesGetApplicationsByTradeId$Params {
    if (!params) {
      return {} as TradesGetApplicationsByTradeId$Params;
    }
    return {
      id: params.id,
    };
  }
};

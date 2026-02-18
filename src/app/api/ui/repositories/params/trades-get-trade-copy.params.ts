import { TradesGetTradeCopy$Params } from '../../../swagger/fn/trades/trades-get-trade-copy';

export interface TradesGetTradeCopyParams {
  id: number;
}

export const tradesGetTradeCopyParamsAdapter = {
  adapt(params?: TradesGetTradeCopyParams): TradesGetTradeCopy$Params {
    if (!params) {
      return {} as TradesGetTradeCopy$Params;
    }
    return {
      id: params.id,
    };
  }
};

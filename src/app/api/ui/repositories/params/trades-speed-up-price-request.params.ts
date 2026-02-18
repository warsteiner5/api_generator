import { TradesSpeedUpPriceRequest$Params } from '../../../swagger/fn/trades/trades-speed-up-price-request';

export interface TradesSpeedUpPriceRequestParams {
  tradeId: number;
}

export const tradesSpeedUpPriceRequestParamsAdapter = {
  adapt(params?: TradesSpeedUpPriceRequestParams): TradesSpeedUpPriceRequest$Params {
    if (!params) {
      return {} as TradesSpeedUpPriceRequest$Params;
    }
    return {
      tradeId: params.tradeId,
    };
  }
};

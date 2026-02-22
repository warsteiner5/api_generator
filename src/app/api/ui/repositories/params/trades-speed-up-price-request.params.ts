import { TradesSpeedUpPriceRequest$Params } from '../../../swagger/fn/trades/trades-speed-up-price-request';

// @ts-ignore
export interface TradesSpeedUpPriceRequestParams {
  tradeId: number;
}

export function tradesSpeedUpPriceRequestAdapter(params?: TradesSpeedUpPriceRequestParams): TradesSpeedUpPriceRequest$Params {
  if (!params) {
    return {} as TradesSpeedUpPriceRequest$Params;
  }
  return {
      tradeId: params.tradeId,
  };
}

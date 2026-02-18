import { TradesNotTookPlaceSetLapsed$Params } from '../../../swagger/fn/trades-not-took-place/trades-not-took-place-set-lapsed';

export interface TradesNotTookPlaceSetLapsedParams {
  tradeId: number;
}

export const tradesNotTookPlaceSetLapsedParamsAdapter = {
  adapt(params?: TradesNotTookPlaceSetLapsedParams): TradesNotTookPlaceSetLapsed$Params {
    if (!params) {
      return {} as TradesNotTookPlaceSetLapsed$Params;
    }
    return {
      tradeId: params.tradeId,
    };
  }
};

import { TradesNotTookPlaceSetLapsed$Params } from '../../../swagger/fn/trades-not-took-place/trades-not-took-place-set-lapsed';

// @ts-ignore
export interface TradesNotTookPlaceSetLapsedParams {
  tradeId: number;
}

export function tradesNotTookPlaceSetLapsedAdapter(params?: TradesNotTookPlaceSetLapsedParams): TradesNotTookPlaceSetLapsed$Params {
  if (!params) {
    return {} as TradesNotTookPlaceSetLapsed$Params;
  }
  return {
      tradeId: params.tradeId,
  };
}

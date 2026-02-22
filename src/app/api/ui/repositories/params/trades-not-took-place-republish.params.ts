import { TradesNotTookPlaceRepublish$Params } from '../../../swagger/fn/trades-not-took-place/trades-not-took-place-republish';

// @ts-ignore
export interface TradesNotTookPlaceRepublishParams {
  tradeId: number;
}

export function tradesNotTookPlaceRepublishAdapter(params?: TradesNotTookPlaceRepublishParams): TradesNotTookPlaceRepublish$Params {
  if (!params) {
    return {} as TradesNotTookPlaceRepublish$Params;
  }
  return {
      tradeId: params.tradeId,
  };
}

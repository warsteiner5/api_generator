import { TradesNotTookPlaceRepublish$Params } from '../../../swagger/fn/trades-not-took-place/trades-not-took-place-republish';

export interface TradesNotTookPlaceRepublishParams {
  tradeId: number;
}

export const tradesNotTookPlaceRepublishParamsAdapter = {
  adapt(params?: TradesNotTookPlaceRepublishParams): TradesNotTookPlaceRepublish$Params {
    if (!params) {
      return {} as TradesNotTookPlaceRepublish$Params;
    }
    return {
      tradeId: params.tradeId,
    };
  }
};

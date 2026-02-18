import { TradesNotTookPlaceLinkNotTookPlaceTrade$Params } from '../../../swagger/fn/trades-not-took-place/trades-not-took-place-link-not-took-place-trade';

export interface TradesNotTookPlaceLinkNotTookPlaceTradeParams {
  tradeId: number;
  childTradeId: number;
}

export const tradesNotTookPlaceLinkNotTookPlaceTradeParamsAdapter = {
  adapt(params?: TradesNotTookPlaceLinkNotTookPlaceTradeParams): TradesNotTookPlaceLinkNotTookPlaceTrade$Params {
    if (!params) {
      return {} as TradesNotTookPlaceLinkNotTookPlaceTrade$Params;
    }
    return {
      tradeId: params.tradeId,
      childTradeId: params.childTradeId,
    };
  }
};

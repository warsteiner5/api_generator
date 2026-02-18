import { TradesCreatePreliminaryOffers2$Params } from '../../../swagger/fn/trades/trades-create-preliminary-offers-2';

export interface TradesCreatePreliminaryOffers2Params {
  tradeId: number;
  offerId: number;
}

export const tradesCreatePreliminaryOffers2ParamsAdapter = {
  adapt(params?: TradesCreatePreliminaryOffers2Params): TradesCreatePreliminaryOffers2$Params {
    if (!params) {
      return {} as TradesCreatePreliminaryOffers2$Params;
    }
    return {
      tradeId: params.tradeId,
      offerId: params.offerId,
    };
  }
};

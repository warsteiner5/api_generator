import { TradesCreatePreliminaryOffers$Params } from '../../../swagger/fn/trades/trades-create-preliminary-offers';

export interface TradesCreatePreliminaryOffersParams {
  tradeId: number;
}

export const tradesCreatePreliminaryOffersParamsAdapter = {
  adapt(params?: TradesCreatePreliminaryOffersParams): TradesCreatePreliminaryOffers$Params {
    if (!params) {
      return {} as TradesCreatePreliminaryOffers$Params;
    }
    return {
      tradeId: params.tradeId,
    };
  }
};

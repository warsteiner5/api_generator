import { TradesCreatePreliminaryOffers$Params } from '../../../swagger/fn/trades/trades-create-preliminary-offers';

// @ts-ignore
export interface TradesCreatePreliminaryOffersParams {
  tradeId: number;
}

export function tradesCreatePreliminaryOffersAdapter(params?: TradesCreatePreliminaryOffersParams): TradesCreatePreliminaryOffers$Params {
  if (!params) {
    return {} as TradesCreatePreliminaryOffers$Params;
  }
  return {
      tradeId: params.tradeId,
  };
}

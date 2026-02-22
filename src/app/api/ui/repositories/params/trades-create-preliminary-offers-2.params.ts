import { TradesCreatePreliminaryOffers2$Params } from '../../../swagger/fn/trades/trades-create-preliminary-offers-2';

// @ts-ignore
export interface TradesCreatePreliminaryOffers2Params {
  tradeId: number;
  offerId: number;
}

export function tradesCreatePreliminaryOffers2Adapter(params?: TradesCreatePreliminaryOffers2Params): TradesCreatePreliminaryOffers2$Params {
  if (!params) {
    return {} as TradesCreatePreliminaryOffers2$Params;
  }
  return {
      tradeId: params.tradeId,
      offerId: params.offerId,
  };
}

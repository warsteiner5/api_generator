import { TradesCreatePreliminaryOffersForPrivateTrade$Params } from '../../../swagger/fn/trades/trades-create-preliminary-offers-for-private-trade';

export interface TradesCreatePreliminaryOffersForPrivateTradeParams {
  tradeId: number;
}

export const tradesCreatePreliminaryOffersForPrivateTradeParamsAdapter = {
  adapt(params?: TradesCreatePreliminaryOffersForPrivateTradeParams): TradesCreatePreliminaryOffersForPrivateTrade$Params {
    if (!params) {
      return {} as TradesCreatePreliminaryOffersForPrivateTrade$Params;
    }
    return {
      tradeId: params.tradeId,
    };
  }
};

import { TradesCreatePreliminaryOffersForPrivateTrade$Params } from '../../../swagger/fn/trades/trades-create-preliminary-offers-for-private-trade';

// @ts-ignore
export interface TradesCreatePreliminaryOffersForPrivateTradeParams {
  tradeId: number;
}

export function tradesCreatePreliminaryOffersForPrivateTradeAdapter(params?: TradesCreatePreliminaryOffersForPrivateTradeParams): TradesCreatePreliminaryOffersForPrivateTrade$Params {
  if (!params) {
    return {} as TradesCreatePreliminaryOffersForPrivateTrade$Params;
  }
  return {
      tradeId: params.tradeId,
  };
}

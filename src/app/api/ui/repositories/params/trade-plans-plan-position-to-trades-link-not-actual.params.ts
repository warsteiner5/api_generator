import { TradePlansPlanPositionToTradesLinkNotActual$Params } from '../../../swagger/fn/trade-plans/trade-plans-plan-position-to-trades-link-not-actual';

// @ts-ignore
export interface TradePlansPlanPositionToTradesLinkNotActualParams {
  tradeId: number;
}

export function tradePlansPlanPositionToTradesLinkNotActualAdapter(params?: TradePlansPlanPositionToTradesLinkNotActualParams): TradePlansPlanPositionToTradesLinkNotActual$Params {
  if (!params) {
    return {} as TradePlansPlanPositionToTradesLinkNotActual$Params;
  }
  return {
      tradeId: params.tradeId,
  };
}

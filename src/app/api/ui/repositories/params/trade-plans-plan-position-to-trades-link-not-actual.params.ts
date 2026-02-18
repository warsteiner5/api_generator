import { TradePlansPlanPositionToTradesLinkNotActual$Params } from '../../../swagger/fn/trade-plans/trade-plans-plan-position-to-trades-link-not-actual';

export interface TradePlansPlanPositionToTradesLinkNotActualParams {
  tradeId: number;
}

export const tradePlansPlanPositionToTradesLinkNotActualParamsAdapter = {
  adapt(params?: TradePlansPlanPositionToTradesLinkNotActualParams): TradePlansPlanPositionToTradesLinkNotActual$Params {
    if (!params) {
      return {} as TradePlansPlanPositionToTradesLinkNotActual$Params;
    }
    return {
      tradeId: params.tradeId,
    };
  }
};

import { TradesPrepareTradeFromPlanLots$Params } from '../../../swagger/fn/trades/trades-prepare-trade-from-plan-lots';

export interface TradesPrepareTradeFromPlanLotsParams {
  marketPlanLotId: number;
}

export const tradesPrepareTradeFromPlanLotsParamsAdapter = {
  adapt(params?: TradesPrepareTradeFromPlanLotsParams): TradesPrepareTradeFromPlanLots$Params {
    if (!params) {
      return {} as TradesPrepareTradeFromPlanLots$Params;
    }
    return {
      marketPlanLotId: params.marketPlanLotId,
    };
  }
};

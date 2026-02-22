import { TradesPrepareTradeFromPlanLots$Params } from '../../../swagger/fn/trades/trades-prepare-trade-from-plan-lots';

// @ts-ignore
export interface TradesPrepareTradeFromPlanLotsParams {
  marketPlanLotId: number;
}

export function tradesPrepareTradeFromPlanLotsAdapter(params?: TradesPrepareTradeFromPlanLotsParams): TradesPrepareTradeFromPlanLots$Params {
  if (!params) {
    return {} as TradesPrepareTradeFromPlanLots$Params;
  }
  return {
      marketPlanLotId: params.marketPlanLotId,
  };
}

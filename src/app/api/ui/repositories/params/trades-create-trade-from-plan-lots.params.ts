import { CreateTradeFromPlanLotsRequestAlt } from '../../models/create-trade-from-plan-lots-request-alt.interface';
import { TradesCreateTradeFromPlanLots$Params } from '../../../swagger/fn/trades/trades-create-trade-from-plan-lots';
import { apiCreateTradeFromPlanLotsRequestAltDtoAdapter } from '../../adapters/models/api-create-trade-from-plan-lots-request.adapter';

// @ts-ignore
export interface TradesCreateTradeFromPlanLotsParams {
  body?: CreateTradeFromPlanLotsRequestAlt;
}

export function tradesCreateTradeFromPlanLotsAdapter(params?: TradesCreateTradeFromPlanLotsParams): TradesCreateTradeFromPlanLots$Params {
  if (!params) {
    return {} as TradesCreateTradeFromPlanLots$Params;
  }
  return {
      body: apiCreateTradeFromPlanLotsRequestAltDtoAdapter(params.body),
  };
}

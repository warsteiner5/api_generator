import { CreateTradeFromPlanLotsRequestAlt } from '../../models/create-trade-from-plan-lots-request-alt.interface';
import { TradesCreateTradeFromPlanLots$Params } from '../../../swagger/fn/trades/trades-create-trade-from-plan-lots';
import { adaptApiCreateTradeFromPlanLotsRequestAltDto } from '../../adapters/toDto/api-create-trade-from-plan-lots-request.adapter';

export interface TradesCreateTradeFromPlanLotsParams {
  body?: CreateTradeFromPlanLotsRequestAlt;
}

export const tradesCreateTradeFromPlanLotsParamsAdapter = {
  adapt(params?: TradesCreateTradeFromPlanLotsParams): TradesCreateTradeFromPlanLots$Params {
    if (!params) {
      return {} as TradesCreateTradeFromPlanLots$Params;
    }
    return {
      body: adaptApiCreateTradeFromPlanLotsRequestAltDto(params.body),
    };
  }
};

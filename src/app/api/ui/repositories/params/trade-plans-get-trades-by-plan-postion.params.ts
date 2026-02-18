import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { TradePlansGetTradesByPlanPostion$Params } from '../../../swagger/fn/trade-plans/trade-plans-get-trades-by-plan-postion';
import { adaptApiSearchObjectAltDto } from '../../adapters/toDto/api-search-object.adapter';

export interface TradePlansGetTradesByPlanPostionParams {
  planPositionId: number;
  body?: SearchObjectAlt;
}

export const tradePlansGetTradesByPlanPostionParamsAdapter = {
  adapt(params?: TradePlansGetTradesByPlanPostionParams): TradePlansGetTradesByPlanPostion$Params {
    if (!params) {
      return {} as TradePlansGetTradesByPlanPostion$Params;
    }
    return {
      planPositionId: params.planPositionId,
      body: adaptApiSearchObjectAltDto(params.body),
    };
  }
};

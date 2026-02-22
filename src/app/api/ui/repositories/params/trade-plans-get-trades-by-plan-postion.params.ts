import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { TradePlansGetTradesByPlanPostion$Params } from '../../../swagger/fn/trade-plans/trade-plans-get-trades-by-plan-postion';
import { apiSearchObjectAltDtoAdapter } from '../../adapters/models/api-search-object.adapter';

// @ts-ignore
export interface TradePlansGetTradesByPlanPostionParams {
  planPositionId: number;
  body?: SearchObjectAlt;
}

export function tradePlansGetTradesByPlanPostionAdapter(params?: TradePlansGetTradesByPlanPostionParams): TradePlansGetTradesByPlanPostion$Params {
  if (!params) {
    return {} as TradePlansGetTradesByPlanPostion$Params;
  }
  return {
      planPositionId: params.planPositionId,
      body: apiSearchObjectAltDtoAdapter(params.body),
  };
}

import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { TradePlansGetPaginatePlanLots$Params } from '../../../swagger/fn/trade-plans/trade-plans-get-paginate-plan-lots';
import { apiSearchObjectAltDtoAdapter } from '../../adapters/models/api-search-object.adapter';

// @ts-ignore
export interface TradePlansGetPaginatePlanLotsParams {
  id: number;
  body?: SearchObjectAlt;
}

export function tradePlansGetPaginatePlanLotsAdapter(params?: TradePlansGetPaginatePlanLotsParams): TradePlansGetPaginatePlanLots$Params {
  if (!params) {
    return {} as TradePlansGetPaginatePlanLots$Params;
  }
  return {
      id: params.id,
      body: apiSearchObjectAltDtoAdapter(params.body),
  };
}

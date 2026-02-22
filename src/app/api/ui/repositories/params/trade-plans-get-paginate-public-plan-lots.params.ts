import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { TradePlansGetPaginatePublicPlanLots$Params } from '../../../swagger/fn/trade-plans/trade-plans-get-paginate-public-plan-lots';
import { apiSearchObjectAltDtoAdapter } from '../../adapters/models/api-search-object.adapter';

// @ts-ignore
export interface TradePlansGetPaginatePublicPlanLotsParams {
  body?: SearchObjectAlt;
}

export function tradePlansGetPaginatePublicPlanLotsAdapter(params?: TradePlansGetPaginatePublicPlanLotsParams): TradePlansGetPaginatePublicPlanLots$Params {
  if (!params) {
    return {} as TradePlansGetPaginatePublicPlanLots$Params;
  }
  return {
      body: apiSearchObjectAltDtoAdapter(params.body),
  };
}

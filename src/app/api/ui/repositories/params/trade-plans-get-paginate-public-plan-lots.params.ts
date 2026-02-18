import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { TradePlansGetPaginatePublicPlanLots$Params } from '../../../swagger/fn/trade-plans/trade-plans-get-paginate-public-plan-lots';
import { adaptApiSearchObjectAltDto } from '../../adapters/toDto/api-search-object.adapter';

export interface TradePlansGetPaginatePublicPlanLotsParams {
  body?: SearchObjectAlt;
}

export const tradePlansGetPaginatePublicPlanLotsParamsAdapter = {
  adapt(params?: TradePlansGetPaginatePublicPlanLotsParams): TradePlansGetPaginatePublicPlanLots$Params {
    if (!params) {
      return {} as TradePlansGetPaginatePublicPlanLots$Params;
    }
    return {
      body: adaptApiSearchObjectAltDto(params.body),
    };
  }
};

import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { TradePlansGetPaginatePlanLots$Params } from '../../../swagger/fn/trade-plans/trade-plans-get-paginate-plan-lots';
import { adaptApiSearchObjectAltDto } from '../../adapters/toDto/api-search-object.adapter';

export interface TradePlansGetPaginatePlanLotsParams {
  id: number;
  body?: SearchObjectAlt;
}

export const tradePlansGetPaginatePlanLotsParamsAdapter = {
  adapt(params?: TradePlansGetPaginatePlanLotsParams): TradePlansGetPaginatePlanLots$Params {
    if (!params) {
      return {} as TradePlansGetPaginatePlanLots$Params;
    }
    return {
      id: params.id,
      body: adaptApiSearchObjectAltDto(params.body),
    };
  }
};

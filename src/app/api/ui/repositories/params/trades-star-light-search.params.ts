import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { TradesStarLightSearch$Params } from '../../../swagger/fn/trades/trades-star-light-search';
import { adaptApiSearchObjectAltDto } from '../../adapters/toDto/api-search-object.adapter';

export interface TradesStarLightSearchParams {
  body?: SearchObjectAlt;
}

export const tradesStarLightSearchParamsAdapter = {
  adapt(params?: TradesStarLightSearchParams): TradesStarLightSearch$Params {
    if (!params) {
      return {} as TradesStarLightSearch$Params;
    }
    return {
      body: adaptApiSearchObjectAltDto(params.body),
    };
  }
};

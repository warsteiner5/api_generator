import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { TradesStarLightSearch$Params } from '../../../swagger/fn/trades/trades-star-light-search';
import { apiSearchObjectAltDtoAdapter } from '../../adapters/models/api-search-object.adapter';

// @ts-ignore
export interface TradesStarLightSearchParams {
  body?: SearchObjectAlt;
}

export function tradesStarLightSearchAdapter(params?: TradesStarLightSearchParams): TradesStarLightSearch$Params {
  if (!params) {
    return {} as TradesStarLightSearch$Params;
  }
  return {
      body: apiSearchObjectAltDtoAdapter(params.body),
  };
}

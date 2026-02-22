import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { TradesPublicLightSearch$Params } from '../../../swagger/fn/trades/trades-public-light-search';
import { apiSearchObjectAltDtoAdapter } from '../../adapters/models/api-search-object.adapter';

// @ts-ignore
export interface TradesPublicLightSearchParams {
  totalCount: number;
  body?: SearchObjectAlt;
}

export function tradesPublicLightSearchAdapter(params?: TradesPublicLightSearchParams): TradesPublicLightSearch$Params {
  if (!params) {
    return {} as TradesPublicLightSearch$Params;
  }
  return {
      totalCount: params.totalCount,
      body: apiSearchObjectAltDtoAdapter(params.body),
  };
}

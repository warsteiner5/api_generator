import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { TradesExternalSearch$Params } from '../../../swagger/fn/trades/trades-external-search';
import { apiSearchObjectAltDtoAdapter } from '../../adapters/models/api-search-object.adapter';

// @ts-ignore
export interface TradesExternalSearchParams {
  body?: SearchObjectAlt;
}

export function tradesExternalSearchAdapter(params?: TradesExternalSearchParams): TradesExternalSearch$Params {
  if (!params) {
    return {} as TradesExternalSearch$Params;
  }
  return {
      body: apiSearchObjectAltDtoAdapter(params.body),
  };
}

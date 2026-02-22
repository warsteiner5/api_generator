import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { TradesPublicSearch2$Params } from '../../../swagger/fn/trades/trades-public-search-2';
import { apiSearchObjectAltDtoAdapter } from '../../adapters/models/api-search-object.adapter';

// @ts-ignore
export interface TradesPublicSearch2Params {
  body?: SearchObjectAlt;
}

export function tradesPublicSearch2Adapter(params?: TradesPublicSearch2Params): TradesPublicSearch2$Params {
  if (!params) {
    return {} as TradesPublicSearch2$Params;
  }
  return {
      body: apiSearchObjectAltDtoAdapter(params.body),
  };
}

import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { TradesGetDealsList$Params } from '../../../swagger/fn/trades/trades-get-deals-list';
import { apiSearchObjectAltDtoAdapter } from '../../adapters/models/api-search-object.adapter';

// @ts-ignore
export interface TradesGetDealsListParams {
  body?: SearchObjectAlt;
}

export function tradesGetDealsListAdapter(params?: TradesGetDealsListParams): TradesGetDealsList$Params {
  if (!params) {
    return {} as TradesGetDealsList$Params;
  }
  return {
      body: apiSearchObjectAltDtoAdapter(params.body),
  };
}

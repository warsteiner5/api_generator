import { PriceListsGetPaginatedPriceLists$Params } from '../../../swagger/fn/price-lists/price-lists-get-paginated-price-lists';
import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { apiSearchObjectAltDtoAdapter } from '../../adapters/models/api-search-object.adapter';

// @ts-ignore
export interface PriceListsGetPaginatedPriceListsParams {
  body?: SearchObjectAlt;
}

export function priceListsGetPaginatedPriceListsAdapter(params?: PriceListsGetPaginatedPriceListsParams): PriceListsGetPaginatedPriceLists$Params {
  if (!params) {
    return {} as PriceListsGetPaginatedPriceLists$Params;
  }
  return {
      body: apiSearchObjectAltDtoAdapter(params.body),
  };
}

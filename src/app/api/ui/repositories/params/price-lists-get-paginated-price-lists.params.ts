import { PriceListsGetPaginatedPriceLists$Params } from '../../../swagger/fn/price-lists/price-lists-get-paginated-price-lists';
import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { adaptApiSearchObjectAltDto } from '../../adapters/toDto/api-search-object.adapter';

export interface PriceListsGetPaginatedPriceListsParams {
  body?: SearchObjectAlt;
}

export const priceListsGetPaginatedPriceListsParamsAdapter = {
  adapt(params?: PriceListsGetPaginatedPriceListsParams): PriceListsGetPaginatedPriceLists$Params {
    if (!params) {
      return {} as PriceListsGetPaginatedPriceLists$Params;
    }
    return {
      body: adaptApiSearchObjectAltDto(params.body),
    };
  }
};

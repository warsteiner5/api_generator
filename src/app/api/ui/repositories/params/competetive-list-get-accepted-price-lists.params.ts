import { AcceptedPriceListFilter } from '../../models/accepted-price-list-filter.interface';
import { CompetetiveListGetAcceptedPriceLists$Params } from '../../../swagger/fn/competetive-list/competetive-list-get-accepted-price-lists';
import { apiAcceptedPriceListFilterDtoAdapter } from '../../adapters/models/api-accepted-price-list-filter-dto.adapter';

// @ts-ignore
export interface CompetetiveListGetAcceptedPriceListsParams {
  body?: AcceptedPriceListFilter;
}

export function competetiveListGetAcceptedPriceListsAdapter(params?: CompetetiveListGetAcceptedPriceListsParams): CompetetiveListGetAcceptedPriceLists$Params {
  if (!params) {
    return {} as CompetetiveListGetAcceptedPriceLists$Params;
  }
  return {
      body: apiAcceptedPriceListFilterDtoAdapter(params.body),
  };
}

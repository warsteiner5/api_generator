import { AcceptedPriceListFilter } from '../../models/accepted-price-list-filter.interface';
import { CompetetiveListGetAcceptedPriceListsInfo$Params } from '../../../swagger/fn/competetive-list/competetive-list-get-accepted-price-lists-info';
import { apiAcceptedPriceListFilterDtoAdapter } from '../../adapters/models/api-accepted-price-list-filter-dto.adapter';

// @ts-ignore
export interface CompetetiveListGetAcceptedPriceListsInfoParams {
  body?: AcceptedPriceListFilter;
}

export function competetiveListGetAcceptedPriceListsInfoAdapter(params?: CompetetiveListGetAcceptedPriceListsInfoParams): CompetetiveListGetAcceptedPriceListsInfo$Params {
  if (!params) {
    return {} as CompetetiveListGetAcceptedPriceListsInfo$Params;
  }
  return {
      body: apiAcceptedPriceListFilterDtoAdapter(params.body),
  };
}

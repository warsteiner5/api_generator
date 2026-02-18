import { AcceptedPriceListFilter } from '../../models/accepted-price-list-filter.interface';
import { CompetetiveListGetAcceptedPriceLists$Params } from '../../../swagger/fn/competetive-list/competetive-list-get-accepted-price-lists';
import { adaptApiAcceptedPriceListFilterDto } from '../../adapters/toDto/api-accepted-price-list-filter-dto.adapter';

export interface CompetetiveListGetAcceptedPriceListsParams {
  body?: AcceptedPriceListFilter;
}

export const competetiveListGetAcceptedPriceListsParamsAdapter = {
  adapt(params?: CompetetiveListGetAcceptedPriceListsParams): CompetetiveListGetAcceptedPriceLists$Params {
    if (!params) {
      return {} as CompetetiveListGetAcceptedPriceLists$Params;
    }
    return {
      body: adaptApiAcceptedPriceListFilterDto(params.body),
    };
  }
};

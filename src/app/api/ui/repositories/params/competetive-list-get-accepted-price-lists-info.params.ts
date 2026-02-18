import { AcceptedPriceListFilter } from '../../models/accepted-price-list-filter.interface';
import { CompetetiveListGetAcceptedPriceListsInfo$Params } from '../../../swagger/fn/competetive-list/competetive-list-get-accepted-price-lists-info';
import { adaptApiAcceptedPriceListFilterDto } from '../../adapters/toDto/api-accepted-price-list-filter-dto.adapter';

export interface CompetetiveListGetAcceptedPriceListsInfoParams {
  body?: AcceptedPriceListFilter;
}

export const competetiveListGetAcceptedPriceListsInfoParamsAdapter = {
  adapt(params?: CompetetiveListGetAcceptedPriceListsInfoParams): CompetetiveListGetAcceptedPriceListsInfo$Params {
    if (!params) {
      return {} as CompetetiveListGetAcceptedPriceListsInfo$Params;
    }
    return {
      body: adaptApiAcceptedPriceListFilterDto(params.body),
    };
  }
};

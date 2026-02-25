import { AcceptedPriceListsExtendedResultAlt } from '../../models/accepted-price-lists-extended-result-alt.interface';
import { ApiAcceptedPriceListsExtendedResultAltDto } from '../../../swagger/models/api-accepted-price-lists-extended-result';
import { apiMarketPaginationResultOfListOfAcceptedPriceListInfoDtoAdapter } from './api-market-pagination-result-of-list-of-accepted-price-list-info-dto.adapter';

export const apiAcceptedPriceListsExtendedResultAltDtoAdapter = (source?: AcceptedPriceListsExtendedResultAlt | null): ApiAcceptedPriceListsExtendedResultAltDto => {
  return {
    ...apiMarketPaginationResultOfListOfAcceptedPriceListInfoDtoAdapter(source as unknown as Parameters<typeof apiMarketPaginationResultOfListOfAcceptedPriceListInfoDtoAdapter>[0]),
    MinPrice: source?.minPrice,
    AveragePrice: source?.averagePrice,
  };
}

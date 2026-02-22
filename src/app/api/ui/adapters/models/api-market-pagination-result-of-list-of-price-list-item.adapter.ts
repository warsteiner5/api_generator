import { MarketPaginationResultOfListOfPriceListItemAlt } from '../../models/market-pagination-result-of-list-of-price-list-item-alt.interface';
import { ApiMarketPaginationResultOfListOfPriceListItemAltDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-price-list-item';
import { apiPriceListItemAltDtoAdapter } from './api-price-list-item.adapter';

export const apiMarketPaginationResultOfListOfPriceListItemAltDtoAdapter = (source?: MarketPaginationResultOfListOfPriceListItemAlt | null): ApiMarketPaginationResultOfListOfPriceListItemAltDto => {
  return {
    currentPage: source?.currentPage,
    items: source?.items?.map((item) => apiPriceListItemAltDtoAdapter(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}

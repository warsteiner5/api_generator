import { ApiMarketPaginationResultOfListOfPriceListItemAltDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-price-list-item';
import { MarketPaginationResultOfListOfPriceListItemAlt } from '../../models/market-pagination-result-of-list-of-price-list-item-alt.interface';
import { priceListItemAltAdapter } from './price-list-item-alt.adapter';

export const marketPaginationResultOfListOfPriceListItemAltAdapter = (source?: ApiMarketPaginationResultOfListOfPriceListItemAltDto | null): MarketPaginationResultOfListOfPriceListItemAlt => {
  return {
    currentPage: source?.currentPage,
    items: source?.items?.map((item) => priceListItemAltAdapter(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}

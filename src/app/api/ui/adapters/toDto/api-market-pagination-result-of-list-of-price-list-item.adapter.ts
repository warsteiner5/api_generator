import { MarketPaginationResultOfListOfPriceListItemAlt } from '../../models/market-pagination-result-of-list-of-price-list-item-alt.interface';
import { ApiMarketPaginationResultOfListOfPriceListItemAltDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-price-list-item';
import { adaptApiPriceListItemAltDto } from './api-price-list-item.adapter';

export function adaptApiMarketPaginationResultOfListOfPriceListItemAltDto(source?: MarketPaginationResultOfListOfPriceListItemAlt | null): ApiMarketPaginationResultOfListOfPriceListItemAltDto {
  return {
    currentPage: source?.currentPage,
    items: (source?.items ?? []).map((item) => adaptApiPriceListItemAltDto(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}

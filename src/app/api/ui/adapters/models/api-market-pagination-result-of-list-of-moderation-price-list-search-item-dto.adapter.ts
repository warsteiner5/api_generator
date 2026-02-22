import { MarketPaginationResultOfListOfModerationPriceListSearchItem } from '../../models/market-pagination-result-of-list-of-moderation-price-list-search-item.interface';
import { ApiMarketPaginationResultOfListOfModerationPriceListSearchItemDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-moderation-price-list-search-item-dto';
import { apiModerationPriceListSearchItemDtoAdapter } from './api-moderation-price-list-search-item-dto.adapter';

export const apiMarketPaginationResultOfListOfModerationPriceListSearchItemDtoAdapter = (source?: MarketPaginationResultOfListOfModerationPriceListSearchItem | null): ApiMarketPaginationResultOfListOfModerationPriceListSearchItemDto => {
  return {
    currentPage: source?.currentPage,
    items: source?.items?.map((item) => apiModerationPriceListSearchItemDtoAdapter(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}

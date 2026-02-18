import { ApiMarketPaginationResultOfListOfModerationPriceListSearchItemDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-moderation-price-list-search-item-dto';
import { MarketPaginationResultOfListOfModerationPriceListSearchItem } from '../../models/market-pagination-result-of-list-of-moderation-price-list-search-item.interface';
import { adaptModerationPriceListSearchItemToUI } from './moderation-price-list-search-item.adapter';

export function adaptMarketPaginationResultOfListOfModerationPriceListSearchItemToUI(source?: ApiMarketPaginationResultOfListOfModerationPriceListSearchItemDto | null): MarketPaginationResultOfListOfModerationPriceListSearchItem {
  return {
    currentPage: source?.currentPage ?? 0,
    items: (source?.items ?? []).map((item) => adaptModerationPriceListSearchItemToUI(item)),
    total: source?.total ?? 0,
    totalPages: source?.totalPages ?? 0,
  };
}

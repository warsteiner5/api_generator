import { ApiMarketPaginationResultOfListOfModerationPriceListSearchItemDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-moderation-price-list-search-item-dto';
import { MarketPaginationResultOfListOfModerationPriceListSearchItem } from '../../models/market-pagination-result-of-list-of-moderation-price-list-search-item.interface';
import { moderationPriceListSearchItemAdapter } from './moderation-price-list-search-item.adapter';

export const marketPaginationResultOfListOfModerationPriceListSearchItemAdapter = (source?: ApiMarketPaginationResultOfListOfModerationPriceListSearchItemDto | null): MarketPaginationResultOfListOfModerationPriceListSearchItem => {
  return {
    currentPage: source?.currentPage,
    items: source?.items?.map((item) => moderationPriceListSearchItemAdapter(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}

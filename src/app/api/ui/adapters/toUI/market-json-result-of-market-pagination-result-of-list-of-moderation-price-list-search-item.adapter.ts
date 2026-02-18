import { ApiMarketJsonResultOfMarketPaginationResultOfListOfModerationPriceListSearchItemDto } from '../../../swagger/models/api-market-json-result-of-market-pagination-result-of-list-of-moderation-price-list-search-item-dto';
import { MarketJsonResultOfMarketPaginationResultOfListOfModerationPriceListSearchItem } from '../../models/market-json-result-of-market-pagination-result-of-list-of-moderation-price-list-search-item.interface';

export function adaptMarketJsonResultOfMarketPaginationResultOfListOfModerationPriceListSearchItemToUI(source?: ApiMarketJsonResultOfMarketPaginationResultOfListOfModerationPriceListSearchItemDto | null): MarketJsonResultOfMarketPaginationResultOfListOfModerationPriceListSearchItem {
  return (source ?? {}) as MarketJsonResultOfMarketPaginationResultOfListOfModerationPriceListSearchItem;
}

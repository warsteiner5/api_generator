import { MarketJsonResultOfMarketPaginationResultOfListOfModerationPriceListSearchItem } from '../../models/market-json-result-of-market-pagination-result-of-list-of-moderation-price-list-search-item.interface';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfModerationPriceListSearchItemDto } from '../../../swagger/models/api-market-json-result-of-market-pagination-result-of-list-of-moderation-price-list-search-item-dto';

export function adaptApiMarketJsonResultOfMarketPaginationResultOfListOfModerationPriceListSearchItemDto(source?: MarketJsonResultOfMarketPaginationResultOfListOfModerationPriceListSearchItem | null): ApiMarketJsonResultOfMarketPaginationResultOfListOfModerationPriceListSearchItemDto {
  return (source ?? {}) as ApiMarketJsonResultOfMarketPaginationResultOfListOfModerationPriceListSearchItemDto;
}

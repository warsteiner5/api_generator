import { ApiMarketJsonResultOfMarketPaginationResultOfListOfDealListItemDto } from '../../../swagger/models/api-market-json-result-of-market-pagination-result-of-list-of-deal-list-item-dto';
import { MarketJsonResultOfMarketPaginationResultOfListOfDealListItem } from '../../models/market-json-result-of-market-pagination-result-of-list-of-deal-list-item.interface';

export function adaptMarketJsonResultOfMarketPaginationResultOfListOfDealListItemToUI(source?: ApiMarketJsonResultOfMarketPaginationResultOfListOfDealListItemDto | null): MarketJsonResultOfMarketPaginationResultOfListOfDealListItem {
  return (source ?? {}) as MarketJsonResultOfMarketPaginationResultOfListOfDealListItem;
}

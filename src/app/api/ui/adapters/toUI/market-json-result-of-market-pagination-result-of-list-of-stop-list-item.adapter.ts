import { ApiMarketJsonResultOfMarketPaginationResultOfListOfStopListItemDto } from '../../../swagger/models/api-market-json-result-of-market-pagination-result-of-list-of-stop-list-item-dto';
import { MarketJsonResultOfMarketPaginationResultOfListOfStopListItem } from '../../models/market-json-result-of-market-pagination-result-of-list-of-stop-list-item.interface';

export function adaptMarketJsonResultOfMarketPaginationResultOfListOfStopListItemToUI(source?: ApiMarketJsonResultOfMarketPaginationResultOfListOfStopListItemDto | null): MarketJsonResultOfMarketPaginationResultOfListOfStopListItem {
  return (source ?? {}) as MarketJsonResultOfMarketPaginationResultOfListOfStopListItem;
}

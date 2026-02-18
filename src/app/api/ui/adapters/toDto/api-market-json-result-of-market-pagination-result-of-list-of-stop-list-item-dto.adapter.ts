import { MarketJsonResultOfMarketPaginationResultOfListOfStopListItem } from '../../models/market-json-result-of-market-pagination-result-of-list-of-stop-list-item.interface';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfStopListItemDto } from '../../../swagger/models/api-market-json-result-of-market-pagination-result-of-list-of-stop-list-item-dto';

export function adaptApiMarketJsonResultOfMarketPaginationResultOfListOfStopListItemDto(source?: MarketJsonResultOfMarketPaginationResultOfListOfStopListItem | null): ApiMarketJsonResultOfMarketPaginationResultOfListOfStopListItemDto {
  return (source ?? {}) as ApiMarketJsonResultOfMarketPaginationResultOfListOfStopListItemDto;
}

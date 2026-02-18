import { MarketJsonResultOfMarketPaginationResultOfListOfDealListItem } from '../../models/market-json-result-of-market-pagination-result-of-list-of-deal-list-item.interface';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfDealListItemDto } from '../../../swagger/models/api-market-json-result-of-market-pagination-result-of-list-of-deal-list-item-dto';

export function adaptApiMarketJsonResultOfMarketPaginationResultOfListOfDealListItemDto(source?: MarketJsonResultOfMarketPaginationResultOfListOfDealListItem | null): ApiMarketJsonResultOfMarketPaginationResultOfListOfDealListItemDto {
  return (source ?? {}) as ApiMarketJsonResultOfMarketPaginationResultOfListOfDealListItemDto;
}

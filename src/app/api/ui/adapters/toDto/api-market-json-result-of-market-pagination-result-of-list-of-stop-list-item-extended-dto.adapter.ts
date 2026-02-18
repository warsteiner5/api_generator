import { MarketJsonResultOfMarketPaginationResultOfListOfStopListItemExtended } from '../../models/market-json-result-of-market-pagination-result-of-list-of-stop-list-item-extended.interface';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfStopListItemExtendedDto } from '../../../swagger/models/api-market-json-result-of-market-pagination-result-of-list-of-stop-list-item-extended-dto';

export function adaptApiMarketJsonResultOfMarketPaginationResultOfListOfStopListItemExtendedDto(source?: MarketJsonResultOfMarketPaginationResultOfListOfStopListItemExtended | null): ApiMarketJsonResultOfMarketPaginationResultOfListOfStopListItemExtendedDto {
  return (source ?? {}) as ApiMarketJsonResultOfMarketPaginationResultOfListOfStopListItemExtendedDto;
}

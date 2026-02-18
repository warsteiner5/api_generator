import { ApiMarketJsonResultOfMarketPaginationResultOfListOfStopListItemExtendedDto } from '../../../swagger/models/api-market-json-result-of-market-pagination-result-of-list-of-stop-list-item-extended-dto';
import { MarketJsonResultOfMarketPaginationResultOfListOfStopListItemExtended } from '../../models/market-json-result-of-market-pagination-result-of-list-of-stop-list-item-extended.interface';

export function adaptMarketJsonResultOfMarketPaginationResultOfListOfStopListItemExtendedToUI(source?: ApiMarketJsonResultOfMarketPaginationResultOfListOfStopListItemExtendedDto | null): MarketJsonResultOfMarketPaginationResultOfListOfStopListItemExtended {
  return (source ?? {}) as MarketJsonResultOfMarketPaginationResultOfListOfStopListItemExtended;
}

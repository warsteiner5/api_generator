import { ApiMarketPaginationResultOfListOfStopListItemExtendedDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-stop-list-item-extended-dto';
import { MarketPaginationResultOfListOfStopListItemExtended } from '../../models/market-pagination-result-of-list-of-stop-list-item-extended.interface';
import { adaptStopListItemExtendedToUI } from './stop-list-item-extended.adapter';

export function adaptMarketPaginationResultOfListOfStopListItemExtendedToUI(source?: ApiMarketPaginationResultOfListOfStopListItemExtendedDto | null): MarketPaginationResultOfListOfStopListItemExtended {
  return {
    currentPage: source?.currentPage ?? 0,
    items: (source?.items ?? []).map((item) => adaptStopListItemExtendedToUI(item)),
    total: source?.total ?? 0,
    totalPages: source?.totalPages ?? 0,
  };
}

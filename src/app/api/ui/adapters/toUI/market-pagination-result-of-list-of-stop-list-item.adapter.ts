import { ApiMarketPaginationResultOfListOfStopListItemDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-stop-list-item-dto';
import { MarketPaginationResultOfListOfStopListItem } from '../../models/market-pagination-result-of-list-of-stop-list-item.interface';
import { adaptStopListItemToUI } from './stop-list-item.adapter';

export function adaptMarketPaginationResultOfListOfStopListItemToUI(source?: ApiMarketPaginationResultOfListOfStopListItemDto | null): MarketPaginationResultOfListOfStopListItem {
  return {
    currentPage: source?.currentPage ?? 0,
    items: (source?.items ?? []).map((item) => adaptStopListItemToUI(item)),
    total: source?.total ?? 0,
    totalPages: source?.totalPages ?? 0,
  };
}

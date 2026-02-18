import { ApiMarketPaginationResultOfListOfDealListItemDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-deal-list-item-dto';
import { MarketPaginationResultOfListOfDealListItem } from '../../models/market-pagination-result-of-list-of-deal-list-item.interface';
import { adaptDealListItemToUI } from './deal-list-item.adapter';

export function adaptMarketPaginationResultOfListOfDealListItemToUI(source?: ApiMarketPaginationResultOfListOfDealListItemDto | null): MarketPaginationResultOfListOfDealListItem {
  return {
    currentPage: source?.currentPage ?? 0,
    items: (source?.items ?? []).map((item) => adaptDealListItemToUI(item)),
    total: source?.total ?? 0,
    totalPages: source?.totalPages ?? 0,
  };
}

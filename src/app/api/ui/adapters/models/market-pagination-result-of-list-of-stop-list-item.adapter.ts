import { ApiMarketPaginationResultOfListOfStopListItemDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-stop-list-item-dto';
import { MarketPaginationResultOfListOfStopListItem } from '../../models/market-pagination-result-of-list-of-stop-list-item.interface';
import { stopListItemAdapter } from './stop-list-item.adapter';

export const marketPaginationResultOfListOfStopListItemAdapter = (source?: ApiMarketPaginationResultOfListOfStopListItemDto | null): MarketPaginationResultOfListOfStopListItem => {
  return {
    currentPage: source?.currentPage,
    items: source?.items?.map((item) => stopListItemAdapter(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}

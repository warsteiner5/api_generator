import { ApiMarketPaginationResultOfListOfDealListItemDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-deal-list-item-dto';
import { MarketPaginationResultOfListOfDealListItem } from '../../models/market-pagination-result-of-list-of-deal-list-item.interface';
import { dealListItemAdapter } from './deal-list-item.adapter';

export const marketPaginationResultOfListOfDealListItemAdapter = (source?: ApiMarketPaginationResultOfListOfDealListItemDto | null): MarketPaginationResultOfListOfDealListItem => {
  return {
    currentPage: source?.currentPage,
    items: source?.items?.map((item) => dealListItemAdapter(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}

import { MarketPaginationResultOfListOfDealListItem } from '../../models/market-pagination-result-of-list-of-deal-list-item.interface';
import { ApiMarketPaginationResultOfListOfDealListItemDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-deal-list-item-dto';
import { apiDealListItemDtoAdapter } from './api-deal-list-item-dto.adapter';

export const apiMarketPaginationResultOfListOfDealListItemDtoAdapter = (source?: MarketPaginationResultOfListOfDealListItem | null): ApiMarketPaginationResultOfListOfDealListItemDto => {
  return {
    currentPage: source?.currentPage,
    items: source?.items?.map((item) => apiDealListItemDtoAdapter(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}

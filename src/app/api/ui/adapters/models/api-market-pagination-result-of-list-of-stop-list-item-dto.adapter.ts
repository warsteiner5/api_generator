import { MarketPaginationResultOfListOfStopListItem } from '../../models/market-pagination-result-of-list-of-stop-list-item.interface';
import { ApiMarketPaginationResultOfListOfStopListItemDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-stop-list-item-dto';
import { apiStopListItemDtoAdapter } from './api-stop-list-item-dto.adapter';

export const apiMarketPaginationResultOfListOfStopListItemDtoAdapter = (source?: MarketPaginationResultOfListOfStopListItem | null): ApiMarketPaginationResultOfListOfStopListItemDto => {
  return {
    currentPage: source?.currentPage,
    items: source?.items?.map((item) => apiStopListItemDtoAdapter(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}

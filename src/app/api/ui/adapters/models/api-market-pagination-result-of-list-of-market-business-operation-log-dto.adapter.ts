import { MarketPaginationResultOfListOfMarketBusinessOperationLog } from '../../models/market-pagination-result-of-list-of-market-business-operation-log.interface';
import { ApiMarketPaginationResultOfListOfMarketBusinessOperationLogDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-market-business-operation-log-dto';
import { apiMarketBusinessOperationLogDtoAdapter } from './api-market-business-operation-log-dto.adapter';

export const apiMarketPaginationResultOfListOfMarketBusinessOperationLogDtoAdapter = (source?: MarketPaginationResultOfListOfMarketBusinessOperationLog | null): ApiMarketPaginationResultOfListOfMarketBusinessOperationLogDto => {
  return {
    currentPage: source?.currentPage,
    items: source?.items?.map((item) => apiMarketBusinessOperationLogDtoAdapter(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}

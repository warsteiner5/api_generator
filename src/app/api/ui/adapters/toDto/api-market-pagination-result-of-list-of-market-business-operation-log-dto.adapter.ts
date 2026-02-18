import { MarketPaginationResultOfListOfMarketBusinessOperationLog } from '../../models/market-pagination-result-of-list-of-market-business-operation-log.interface';
import { ApiMarketPaginationResultOfListOfMarketBusinessOperationLogDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-market-business-operation-log-dto';
import { adaptApiMarketBusinessOperationLogDto } from './api-market-business-operation-log-dto.adapter';

export function adaptApiMarketPaginationResultOfListOfMarketBusinessOperationLogDto(source?: MarketPaginationResultOfListOfMarketBusinessOperationLog | null): ApiMarketPaginationResultOfListOfMarketBusinessOperationLogDto {
  return {
    currentPage: source?.currentPage,
    items: (source?.items ?? []).map((item) => adaptApiMarketBusinessOperationLogDto(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}

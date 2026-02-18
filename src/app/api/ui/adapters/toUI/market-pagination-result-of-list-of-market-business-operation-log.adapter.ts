import { ApiMarketPaginationResultOfListOfMarketBusinessOperationLogDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-market-business-operation-log-dto';
import { MarketPaginationResultOfListOfMarketBusinessOperationLog } from '../../models/market-pagination-result-of-list-of-market-business-operation-log.interface';
import { adaptMarketBusinessOperationLogToUI } from './market-business-operation-log.adapter';

export function adaptMarketPaginationResultOfListOfMarketBusinessOperationLogToUI(source?: ApiMarketPaginationResultOfListOfMarketBusinessOperationLogDto | null): MarketPaginationResultOfListOfMarketBusinessOperationLog {
  return {
    currentPage: source?.currentPage ?? 0,
    items: (source?.items ?? []).map((item) => adaptMarketBusinessOperationLogToUI(item)),
    total: source?.total ?? 0,
    totalPages: source?.totalPages ?? 0,
  };
}

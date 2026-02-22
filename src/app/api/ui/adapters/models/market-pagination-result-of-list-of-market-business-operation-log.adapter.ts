import { ApiMarketPaginationResultOfListOfMarketBusinessOperationLogDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-market-business-operation-log-dto';
import { MarketPaginationResultOfListOfMarketBusinessOperationLog } from '../../models/market-pagination-result-of-list-of-market-business-operation-log.interface';
import { marketBusinessOperationLogAdapter } from './market-business-operation-log.adapter';

export const marketPaginationResultOfListOfMarketBusinessOperationLogAdapter = (source?: ApiMarketPaginationResultOfListOfMarketBusinessOperationLogDto | null): MarketPaginationResultOfListOfMarketBusinessOperationLog => {
  return {
    currentPage: source?.currentPage,
    items: source?.items?.map((item) => marketBusinessOperationLogAdapter(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}

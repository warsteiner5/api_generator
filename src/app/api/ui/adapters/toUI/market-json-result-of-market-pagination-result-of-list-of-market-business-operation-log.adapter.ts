import { ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketBusinessOperationLogDto } from '../../../swagger/models/api-market-json-result-of-market-pagination-result-of-list-of-market-business-operation-log-dto';
import { MarketJsonResultOfMarketPaginationResultOfListOfMarketBusinessOperationLog } from '../../models/market-json-result-of-market-pagination-result-of-list-of-market-business-operation-log.interface';

export function adaptMarketJsonResultOfMarketPaginationResultOfListOfMarketBusinessOperationLogToUI(source?: ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketBusinessOperationLogDto | null): MarketJsonResultOfMarketPaginationResultOfListOfMarketBusinessOperationLog {
  return (source ?? {}) as MarketJsonResultOfMarketPaginationResultOfListOfMarketBusinessOperationLog;
}

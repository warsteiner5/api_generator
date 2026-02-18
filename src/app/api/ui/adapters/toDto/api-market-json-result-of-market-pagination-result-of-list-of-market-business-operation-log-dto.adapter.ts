import { MarketJsonResultOfMarketPaginationResultOfListOfMarketBusinessOperationLog } from '../../models/market-json-result-of-market-pagination-result-of-list-of-market-business-operation-log.interface';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketBusinessOperationLogDto } from '../../../swagger/models/api-market-json-result-of-market-pagination-result-of-list-of-market-business-operation-log-dto';

export function adaptApiMarketJsonResultOfMarketPaginationResultOfListOfMarketBusinessOperationLogDto(source?: MarketJsonResultOfMarketPaginationResultOfListOfMarketBusinessOperationLog | null): ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketBusinessOperationLogDto {
  return (source ?? {}) as ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketBusinessOperationLogDto;
}

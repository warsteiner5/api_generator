import { MarketPaginationResultOfListOfTransactionShort } from '../../models/market-pagination-result-of-list-of-transaction-short.interface';
import { ApiMarketPaginationResultOfListOfTransactionShortDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-transaction-short-dto';
import { adaptApiTransactionShortDto } from './api-transaction-short-dto.adapter';

export function adaptApiMarketPaginationResultOfListOfTransactionShortDto(source?: MarketPaginationResultOfListOfTransactionShort | null): ApiMarketPaginationResultOfListOfTransactionShortDto {
  return {
    currentPage: source?.currentPage,
    items: (source?.items ?? []).map((item) => adaptApiTransactionShortDto(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}

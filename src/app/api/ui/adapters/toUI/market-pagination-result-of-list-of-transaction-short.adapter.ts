import { ApiMarketPaginationResultOfListOfTransactionShortDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-transaction-short-dto';
import { MarketPaginationResultOfListOfTransactionShort } from '../../models/market-pagination-result-of-list-of-transaction-short.interface';
import { adaptTransactionShortToUI } from './transaction-short.adapter';

export function adaptMarketPaginationResultOfListOfTransactionShortToUI(source?: ApiMarketPaginationResultOfListOfTransactionShortDto | null): MarketPaginationResultOfListOfTransactionShort {
  return {
    currentPage: source?.currentPage ?? 0,
    items: (source?.items ?? []).map((item) => adaptTransactionShortToUI(item)),
    total: source?.total ?? 0,
    totalPages: source?.totalPages ?? 0,
  };
}

import { ApiMarketPaginationResultOfListOfTransactionShortDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-transaction-short-dto';
import { MarketPaginationResultOfListOfTransactionShort } from '../../models/market-pagination-result-of-list-of-transaction-short.interface';
import { transactionShortAdapter } from './transaction-short.adapter';

export const marketPaginationResultOfListOfTransactionShortAdapter = (source?: ApiMarketPaginationResultOfListOfTransactionShortDto | null): MarketPaginationResultOfListOfTransactionShort => {
  return {
    currentPage: source?.currentPage,
    items: source?.items?.map((item) => transactionShortAdapter(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}

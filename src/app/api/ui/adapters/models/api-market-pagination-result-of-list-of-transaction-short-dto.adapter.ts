import { MarketPaginationResultOfListOfTransactionShort } from '../../models/market-pagination-result-of-list-of-transaction-short.interface';
import { ApiMarketPaginationResultOfListOfTransactionShortDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-transaction-short-dto';
import { apiTransactionShortDtoAdapter } from './api-transaction-short-dto.adapter';

export const apiMarketPaginationResultOfListOfTransactionShortDtoAdapter = (source?: MarketPaginationResultOfListOfTransactionShort | null): ApiMarketPaginationResultOfListOfTransactionShortDto => {
  return {
    currentPage: source?.currentPage,
    items: source?.items?.map((item) => apiTransactionShortDtoAdapter(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}

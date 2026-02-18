import { ApiMarketJsonResultOfMarketPaginationResultOfListOfTransactionShortDto } from '../../../swagger/models/api-market-json-result-of-market-pagination-result-of-list-of-transaction-short-dto';
import { MarketJsonResultOfMarketPaginationResultOfListOfTransactionShort } from '../../models/market-json-result-of-market-pagination-result-of-list-of-transaction-short.interface';

export function adaptMarketJsonResultOfMarketPaginationResultOfListOfTransactionShortToUI(source?: ApiMarketJsonResultOfMarketPaginationResultOfListOfTransactionShortDto | null): MarketJsonResultOfMarketPaginationResultOfListOfTransactionShort {
  return (source ?? {}) as MarketJsonResultOfMarketPaginationResultOfListOfTransactionShort;
}

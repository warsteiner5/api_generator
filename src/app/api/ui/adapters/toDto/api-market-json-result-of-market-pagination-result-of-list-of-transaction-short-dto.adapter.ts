import { MarketJsonResultOfMarketPaginationResultOfListOfTransactionShort } from '../../models/market-json-result-of-market-pagination-result-of-list-of-transaction-short.interface';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfTransactionShortDto } from '../../../swagger/models/api-market-json-result-of-market-pagination-result-of-list-of-transaction-short-dto';

export function adaptApiMarketJsonResultOfMarketPaginationResultOfListOfTransactionShortDto(source?: MarketJsonResultOfMarketPaginationResultOfListOfTransactionShort | null): ApiMarketJsonResultOfMarketPaginationResultOfListOfTransactionShortDto {
  return (source ?? {}) as ApiMarketJsonResultOfMarketPaginationResultOfListOfTransactionShortDto;
}

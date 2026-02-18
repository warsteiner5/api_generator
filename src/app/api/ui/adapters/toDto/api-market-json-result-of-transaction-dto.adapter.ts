import { MarketJsonResultOfTransaction } from '../../models/market-json-result-of-transaction.interface';
import { ApiMarketJsonResultOfTransactionDto } from '../../../swagger/models/api-market-json-result-of-transaction-dto';

export function adaptApiMarketJsonResultOfTransactionDto(source?: MarketJsonResultOfTransaction | null): ApiMarketJsonResultOfTransactionDto {
  return (source ?? {}) as ApiMarketJsonResultOfTransactionDto;
}

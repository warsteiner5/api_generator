import { ApiMarketJsonResultOfTransactionDto } from '../../../swagger/models/api-market-json-result-of-transaction-dto';
import { MarketJsonResultOfTransaction } from '../../models/market-json-result-of-transaction.interface';

export function adaptMarketJsonResultOfTransactionToUI(source?: ApiMarketJsonResultOfTransactionDto | null): MarketJsonResultOfTransaction {
  return (source ?? {}) as MarketJsonResultOfTransaction;
}

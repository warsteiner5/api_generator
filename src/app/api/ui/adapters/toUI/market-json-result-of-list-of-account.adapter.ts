import { ApiMarketJsonResultOfListOfAccountDto } from '../../../swagger/models/api-market-json-result-of-list-of-account-dto';
import { MarketJsonResultOfListOfAccount } from '../../models/market-json-result-of-list-of-account.interface';

export function adaptMarketJsonResultOfListOfAccountToUI(source?: ApiMarketJsonResultOfListOfAccountDto | null): MarketJsonResultOfListOfAccount {
  return (source ?? {}) as MarketJsonResultOfListOfAccount;
}

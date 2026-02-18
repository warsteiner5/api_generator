import { MarketJsonResultOfListOfAccount } from '../../models/market-json-result-of-list-of-account.interface';
import { ApiMarketJsonResultOfListOfAccountDto } from '../../../swagger/models/api-market-json-result-of-list-of-account-dto';

export function adaptApiMarketJsonResultOfListOfAccountDto(source?: MarketJsonResultOfListOfAccount | null): ApiMarketJsonResultOfListOfAccountDto {
  return (source ?? {}) as ApiMarketJsonResultOfListOfAccountDto;
}

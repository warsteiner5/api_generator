import { MarketJsonResultOfInteger } from '../../models/market-json-result-of-integer.interface';
import { ApiMarketJsonResultOfInteger } from '../../../swagger/models/api-market-json-result-of-integer';

export function adaptApiMarketJsonResultOfInteger(source?: MarketJsonResultOfInteger | null): ApiMarketJsonResultOfInteger {
  return (source ?? {}) as ApiMarketJsonResultOfInteger;
}

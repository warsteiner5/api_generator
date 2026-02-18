import { MarketJsonResultOfListOfInteger } from '../../models/market-json-result-of-list-of-integer.interface';
import { ApiMarketJsonResultOfListOfInteger } from '../../../swagger/models/api-market-json-result-of-list-of-integer';

export function adaptApiMarketJsonResultOfListOfInteger(source?: MarketJsonResultOfListOfInteger | null): ApiMarketJsonResultOfListOfInteger {
  return (source ?? {}) as ApiMarketJsonResultOfListOfInteger;
}

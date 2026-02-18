import { MarketJsonResultOfString } from '../../models/market-json-result-of-string.interface';
import { ApiMarketJsonResultOfString } from '../../../swagger/models/api-market-json-result-of-string';

export function adaptApiMarketJsonResultOfString(source?: MarketJsonResultOfString | null): ApiMarketJsonResultOfString {
  return (source ?? {}) as ApiMarketJsonResultOfString;
}

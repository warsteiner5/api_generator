import { MarketJsonResultOfKsrValue } from '../../models/market-json-result-of-ksr-value.interface';
import { ApiMarketJsonResultOfKsrValue } from '../../../swagger/models/api-market-json-result-of-ksr-value';

export function adaptApiMarketJsonResultOfKsrValue(source?: MarketJsonResultOfKsrValue | null): ApiMarketJsonResultOfKsrValue {
  return (source ?? {}) as ApiMarketJsonResultOfKsrValue;
}

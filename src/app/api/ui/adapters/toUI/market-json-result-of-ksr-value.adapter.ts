import { ApiMarketJsonResultOfKsrValue } from '../../../swagger/models/api-market-json-result-of-ksr-value';
import { MarketJsonResultOfKsrValue } from '../../models/market-json-result-of-ksr-value.interface';

export function adaptMarketJsonResultOfKsrValueToUI(source?: ApiMarketJsonResultOfKsrValue | null): MarketJsonResultOfKsrValue {
  return (source ?? {}) as MarketJsonResultOfKsrValue;
}

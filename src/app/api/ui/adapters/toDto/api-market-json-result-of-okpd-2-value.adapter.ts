import { MarketJsonResultOfOkpd2Value } from '../../models/market-json-result-of-okpd-2-value.interface';
import { ApiMarketJsonResultOfOkpd2Value } from '../../../swagger/models/api-market-json-result-of-okpd-2-value';

export function adaptApiMarketJsonResultOfOkpd2Value(source?: MarketJsonResultOfOkpd2Value | null): ApiMarketJsonResultOfOkpd2Value {
  return (source ?? {}) as ApiMarketJsonResultOfOkpd2Value;
}

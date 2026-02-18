import { MarketJsonResultOfListOfOkpd2Value } from '../../models/market-json-result-of-list-of-okpd-2-value.interface';
import { ApiMarketJsonResultOfListOfOkpd2Value } from '../../../swagger/models/api-market-json-result-of-list-of-okpd-2-value';

export function adaptApiMarketJsonResultOfListOfOkpd2Value(source?: MarketJsonResultOfListOfOkpd2Value | null): ApiMarketJsonResultOfListOfOkpd2Value {
  return (source ?? {}) as ApiMarketJsonResultOfListOfOkpd2Value;
}

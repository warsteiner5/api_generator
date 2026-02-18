import { ApiMarketJsonResultOfListOfOkpd2Value } from '../../../swagger/models/api-market-json-result-of-list-of-okpd-2-value';
import { MarketJsonResultOfListOfOkpd2Value } from '../../models/market-json-result-of-list-of-okpd-2-value.interface';

export function adaptMarketJsonResultOfListOfOkpd2ValueToUI(source?: ApiMarketJsonResultOfListOfOkpd2Value | null): MarketJsonResultOfListOfOkpd2Value {
  return (source ?? {}) as MarketJsonResultOfListOfOkpd2Value;
}

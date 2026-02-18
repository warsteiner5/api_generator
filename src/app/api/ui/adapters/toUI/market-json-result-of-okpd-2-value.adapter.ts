import { ApiMarketJsonResultOfOkpd2Value } from '../../../swagger/models/api-market-json-result-of-okpd-2-value';
import { MarketJsonResultOfOkpd2Value } from '../../models/market-json-result-of-okpd-2-value.interface';

export function adaptMarketJsonResultOfOkpd2ValueToUI(source?: ApiMarketJsonResultOfOkpd2Value | null): MarketJsonResultOfOkpd2Value {
  return (source ?? {}) as MarketJsonResultOfOkpd2Value;
}

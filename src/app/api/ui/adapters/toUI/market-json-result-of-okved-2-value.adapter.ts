import { ApiMarketJsonResultOfOkved2Value } from '../../../swagger/models/api-market-json-result-of-okved-2-value';
import { MarketJsonResultOfOkved2Value } from '../../models/market-json-result-of-okved-2-value.interface';

export function adaptMarketJsonResultOfOkved2ValueToUI(source?: ApiMarketJsonResultOfOkved2Value | null): MarketJsonResultOfOkved2Value {
  return (source ?? {}) as MarketJsonResultOfOkved2Value;
}

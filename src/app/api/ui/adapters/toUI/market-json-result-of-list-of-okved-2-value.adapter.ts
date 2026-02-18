import { ApiMarketJsonResultOfListOfOkved2Value } from '../../../swagger/models/api-market-json-result-of-list-of-okved-2-value';
import { MarketJsonResultOfListOfOkved2Value } from '../../models/market-json-result-of-list-of-okved-2-value.interface';

export function adaptMarketJsonResultOfListOfOkved2ValueToUI(source?: ApiMarketJsonResultOfListOfOkved2Value | null): MarketJsonResultOfListOfOkved2Value {
  return (source ?? {}) as MarketJsonResultOfListOfOkved2Value;
}

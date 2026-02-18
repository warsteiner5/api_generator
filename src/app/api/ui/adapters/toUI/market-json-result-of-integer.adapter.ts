import { ApiMarketJsonResultOfInteger } from '../../../swagger/models/api-market-json-result-of-integer';
import { MarketJsonResultOfInteger } from '../../models/market-json-result-of-integer.interface';

export function adaptMarketJsonResultOfIntegerToUI(source?: ApiMarketJsonResultOfInteger | null): MarketJsonResultOfInteger {
  return (source ?? {}) as MarketJsonResultOfInteger;
}

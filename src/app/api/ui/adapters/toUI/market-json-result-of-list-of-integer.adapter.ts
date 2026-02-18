import { ApiMarketJsonResultOfListOfInteger } from '../../../swagger/models/api-market-json-result-of-list-of-integer';
import { MarketJsonResultOfListOfInteger } from '../../models/market-json-result-of-list-of-integer.interface';

export function adaptMarketJsonResultOfListOfIntegerToUI(source?: ApiMarketJsonResultOfListOfInteger | null): MarketJsonResultOfListOfInteger {
  return (source ?? {}) as MarketJsonResultOfListOfInteger;
}

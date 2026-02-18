import { ApiMarketJsonResultOfString } from '../../../swagger/models/api-market-json-result-of-string';
import { MarketJsonResultOfString } from '../../models/market-json-result-of-string.interface';

export function adaptMarketJsonResultOfStringToUI(source?: ApiMarketJsonResultOfString | null): MarketJsonResultOfString {
  return (source ?? {}) as MarketJsonResultOfString;
}

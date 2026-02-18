import { ApiMarketJsonResultOfLong } from '../../../swagger/models/api-market-json-result-of-long';
import { MarketJsonResultOfLong } from '../../models/market-json-result-of-long.interface';

export function adaptMarketJsonResultOfLongToUI(source?: ApiMarketJsonResultOfLong | null): MarketJsonResultOfLong {
  return (source ?? {}) as MarketJsonResultOfLong;
}

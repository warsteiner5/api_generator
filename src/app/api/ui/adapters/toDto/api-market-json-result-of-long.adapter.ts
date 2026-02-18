import { MarketJsonResultOfLong } from '../../models/market-json-result-of-long.interface';
import { ApiMarketJsonResultOfLong } from '../../../swagger/models/api-market-json-result-of-long';

export function adaptApiMarketJsonResultOfLong(source?: MarketJsonResultOfLong | null): ApiMarketJsonResultOfLong {
  return (source ?? {}) as ApiMarketJsonResultOfLong;
}

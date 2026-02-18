import { ApiMarketJsonResultOfUserCountersDto } from '../../../swagger/models/api-market-json-result-of-user-counters-dto';
import { MarketJsonResultOfUserCounters } from '../../models/market-json-result-of-user-counters.interface';

export function adaptMarketJsonResultOfUserCountersToUI(source?: ApiMarketJsonResultOfUserCountersDto | null): MarketJsonResultOfUserCounters {
  return (source ?? {}) as MarketJsonResultOfUserCounters;
}

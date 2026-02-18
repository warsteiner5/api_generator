import { MarketJsonResultOfUserCounters } from '../../models/market-json-result-of-user-counters.interface';
import { ApiMarketJsonResultOfUserCountersDto } from '../../../swagger/models/api-market-json-result-of-user-counters-dto';

export function adaptApiMarketJsonResultOfUserCountersDto(source?: MarketJsonResultOfUserCounters | null): ApiMarketJsonResultOfUserCountersDto {
  return (source ?? {}) as ApiMarketJsonResultOfUserCountersDto;
}

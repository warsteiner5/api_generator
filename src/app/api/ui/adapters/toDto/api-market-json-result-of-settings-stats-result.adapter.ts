import { MarketJsonResultOfSettingsStatsResult } from '../../models/market-json-result-of-settings-stats-result.interface';
import { ApiMarketJsonResultOfSettingsStatsResult } from '../../../swagger/models/api-market-json-result-of-settings-stats-result';

export function adaptApiMarketJsonResultOfSettingsStatsResult(source?: MarketJsonResultOfSettingsStatsResult | null): ApiMarketJsonResultOfSettingsStatsResult {
  return (source ?? {}) as ApiMarketJsonResultOfSettingsStatsResult;
}

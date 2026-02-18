import { ApiMarketJsonResultOfSettingsStatsResult } from '../../../swagger/models/api-market-json-result-of-settings-stats-result';
import { MarketJsonResultOfSettingsStatsResult } from '../../models/market-json-result-of-settings-stats-result.interface';

export function adaptMarketJsonResultOfSettingsStatsResultToUI(source?: ApiMarketJsonResultOfSettingsStatsResult | null): MarketJsonResultOfSettingsStatsResult {
  return (source ?? {}) as MarketJsonResultOfSettingsStatsResult;
}

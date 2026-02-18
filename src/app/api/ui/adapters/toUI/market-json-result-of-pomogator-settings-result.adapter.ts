import { ApiMarketJsonResultOfPomogatorSettingsResult } from '../../../swagger/models/api-market-json-result-of-pomogator-settings-result';
import { MarketJsonResultOfPomogatorSettingsResult } from '../../models/market-json-result-of-pomogator-settings-result.interface';

export function adaptMarketJsonResultOfPomogatorSettingsResultToUI(source?: ApiMarketJsonResultOfPomogatorSettingsResult | null): MarketJsonResultOfPomogatorSettingsResult {
  return (source ?? {}) as MarketJsonResultOfPomogatorSettingsResult;
}

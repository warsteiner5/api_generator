import { MarketJsonResultOfPomogatorSettingsResult } from '../../models/market-json-result-of-pomogator-settings-result.interface';
import { ApiMarketJsonResultOfPomogatorSettingsResult } from '../../../swagger/models/api-market-json-result-of-pomogator-settings-result';

export function adaptApiMarketJsonResultOfPomogatorSettingsResult(source?: MarketJsonResultOfPomogatorSettingsResult | null): ApiMarketJsonResultOfPomogatorSettingsResult {
  return (source ?? {}) as ApiMarketJsonResultOfPomogatorSettingsResult;
}

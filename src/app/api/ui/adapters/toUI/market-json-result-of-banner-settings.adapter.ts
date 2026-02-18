import { ApiMarketJsonResultOfBannerSettingsDto } from '../../../swagger/models/api-market-json-result-of-banner-settings-dto';
import { MarketJsonResultOfBannerSettings } from '../../models/market-json-result-of-banner-settings.interface';

export function adaptMarketJsonResultOfBannerSettingsToUI(source?: ApiMarketJsonResultOfBannerSettingsDto | null): MarketJsonResultOfBannerSettings {
  return (source ?? {}) as MarketJsonResultOfBannerSettings;
}

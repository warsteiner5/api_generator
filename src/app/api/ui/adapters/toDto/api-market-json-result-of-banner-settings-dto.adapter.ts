import { MarketJsonResultOfBannerSettings } from '../../models/market-json-result-of-banner-settings.interface';
import { ApiMarketJsonResultOfBannerSettingsDto } from '../../../swagger/models/api-market-json-result-of-banner-settings-dto';

export function adaptApiMarketJsonResultOfBannerSettingsDto(source?: MarketJsonResultOfBannerSettings | null): ApiMarketJsonResultOfBannerSettingsDto {
  return (source ?? {}) as ApiMarketJsonResultOfBannerSettingsDto;
}

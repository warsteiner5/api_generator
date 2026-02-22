import { ApiBannerSettingsDto } from '../../../swagger/models/api-banner-settings-dto';
import { BannerSettings } from '../../models/banner-settings.interface';

export const bannerSettingsAdapter = (source?: ApiBannerSettingsDto | null): BannerSettings => {
  return {
    css: source?.Css,
    html: source?.Html,
  };
}

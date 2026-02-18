import { BannerSettings } from '../../models/banner-settings.interface';
import { ApiBannerSettingsDto } from '../../../swagger/models/api-banner-settings-dto';

export function adaptApiBannerSettingsDto(source?: BannerSettings | null): ApiBannerSettingsDto {
  return {
    Css: source?.css,
    Html: source?.html,
  };
}

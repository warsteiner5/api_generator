import { MarketOrganizationProfileSocialMedia } from '../../models/market-organization-profile-social-media.interface';
import { ApiMarketOrganizationProfileSocialMediaDto } from '../../../swagger/models/api-market-organization-profile-social-media-dto';

export const apiMarketOrganizationProfileSocialMediaDtoAdapter = (source?: MarketOrganizationProfileSocialMedia | null): ApiMarketOrganizationProfileSocialMediaDto => {
  return {
    Telegram: source?.telegram,
    VideoHosting: source?.videoHosting,
    Vk: source?.vk,
  };
}

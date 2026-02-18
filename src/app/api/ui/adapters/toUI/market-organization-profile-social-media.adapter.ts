import { ApiMarketOrganizationProfileSocialMediaDto } from '../../../swagger/models/api-market-organization-profile-social-media-dto';
import { MarketOrganizationProfileSocialMedia } from '../../models/market-organization-profile-social-media.interface';

export function adaptMarketOrganizationProfileSocialMediaToUI(source?: ApiMarketOrganizationProfileSocialMediaDto | null): MarketOrganizationProfileSocialMedia {
  return {
    telegram: source?.Telegram ?? '',
    videoHosting: source?.VideoHosting ?? '',
    vk: source?.Vk ?? '',
  };
}

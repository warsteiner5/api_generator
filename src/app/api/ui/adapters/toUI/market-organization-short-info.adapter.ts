import { ApiMarketOrganizationShortInfoDto } from '../../../swagger/models/api-market-organization-short-info-dto';
import { MarketOrganizationShortInfo } from '../../models/market-organization-short-info.interface';

export function adaptMarketOrganizationShortInfoToUI(source?: ApiMarketOrganizationShortInfoDto | null): MarketOrganizationShortInfo {
  return {
    address: source?.Address ?? '',
    email: source?.Email ?? '',
    guid: source?.Guid ?? '',
    id: source?.Id ?? 0,
    logoFileGuid: source?.LogoFileGuid ?? '',
    phoneNumber: source?.PhoneNumber ?? '',
    shortName: source?.ShortName ?? '',
    webSiteUrl: source?.WebSiteUrl ?? '',
  };
}

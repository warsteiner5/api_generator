import { MarketOrganizationShortInfo } from '../../models/market-organization-short-info.interface';
import { ApiMarketOrganizationShortInfoDto } from '../../../swagger/models/api-market-organization-short-info-dto';

export const apiMarketOrganizationShortInfoDtoAdapter = (source?: MarketOrganizationShortInfo | null): ApiMarketOrganizationShortInfoDto => {
  return {
    Address: source?.address,
    Email: source?.email,
    Guid: source?.guid,
    Id: source?.id,
    LogoFileGuid: source?.logoFileGuid,
    PhoneNumber: source?.phoneNumber,
    ShortName: source?.shortName,
    WebSiteUrl: source?.webSiteUrl,
  };
}

import { ApiMarketProfileOrganizationInfoDto } from '../../../swagger/models/api-market-profile-organization-info-dto';
import { MarketProfileOrganizationInfo } from '../../models/market-profile-organization-info.interface';
import { externalSystemToSendCartAdapter } from './external-system-to-send-cart.adapter';
import { orgAccreditationLevelAdapter } from './org-accreditation-level.adapter';
import { organizationTypeEnumAdapter } from '../enums/organization-type-enum.adapter';

export const marketProfileOrganizationInfoAdapter = (source?: ApiMarketProfileOrganizationInfoDto | null): MarketProfileOrganizationInfo => {
  return {
    externalSystemsToSendCart: source?.ExternalSystemsToSendCart?.map((item) => externalSystemToSendCartAdapter(item)),
    guid: source?.Guid,
    id: source?.Id,
    inn: source?.Inn,
    isHomeRegionInfoMessageShow: source?.IsHomeRegionInfoMessageShow,
    isSendCartToExternalSystemsEnabled: source?.IsSendCartToExternalSystemsEnabled,
    isSmsp: source?.IsSmsp,
    isTestOrganization: source?.IsTestOrganization,
    kpp: source?.Kpp,
    name: source?.Name,
    orgAccreditationLevel: source?.OrgAccreditationLevel === null ? undefined : orgAccreditationLevelAdapter(source?.OrgAccreditationLevel),
    organizationType: source?.OrganizationType === null ? undefined : organizationTypeEnumAdapter(source?.OrganizationType),
    shortName: source?.ShortName,
    unp: source?.Unp,
    userId: source?.UserId,
  };
}

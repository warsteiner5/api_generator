import { ApiMarketProfileOrganizationInfoDto } from '../../../swagger/models/api-market-profile-organization-info-dto';
import { MarketProfileOrganizationInfo } from '../../models/market-profile-organization-info.interface';
import { adaptExternalSystemToSendCartToUI } from './external-system-to-send-cart.adapter';
import { adaptOrgAccreditationLevelToUI } from './org-accreditation-level.adapter';
import { adaptOrganizationTypeEnumToUI } from './organization-type-enum.adapter';

export function adaptMarketProfileOrganizationInfoToUI(source?: ApiMarketProfileOrganizationInfoDto | null): MarketProfileOrganizationInfo {
  return {
    externalSystemsToSendCart: (source?.ExternalSystemsToSendCart ?? []).map((item) => adaptExternalSystemToSendCartToUI(item)),
    guid: source?.Guid ?? '',
    id: source?.Id ?? 0,
    inn: source?.Inn ?? '',
    isHomeRegionInfoMessageShow: source?.IsHomeRegionInfoMessageShow ?? false,
    isSendCartToExternalSystemsEnabled: source?.IsSendCartToExternalSystemsEnabled ?? false,
    isSmsp: source?.IsSmsp ?? false,
    isTestOrganization: source?.IsTestOrganization ?? false,
    kpp: source?.Kpp ?? '',
    name: source?.Name ?? '',
    orgAccreditationLevel: adaptOrgAccreditationLevelToUI(source?.OrgAccreditationLevel),
    organizationType: adaptOrganizationTypeEnumToUI(source?.OrganizationType),
    shortName: source?.ShortName ?? '',
    unp: source?.Unp ?? '',
    userId: source?.UserId ?? 0,
  };
}

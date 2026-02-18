import { MarketProfileOrganizationInfo } from '../../models/market-profile-organization-info.interface';
import { ApiMarketProfileOrganizationInfoDto } from '../../../swagger/models/api-market-profile-organization-info-dto';
import { adaptApiExternalSystemToSendCartDto } from './api-external-system-to-send-cart-dto.adapter';
import { adaptApiOrgAccreditationLevelDto } from './api-org-accreditation-level-dto.adapter';
import { adaptApiOrganizationTypeEnum } from './api-organization-type-enum.adapter';

export function adaptApiMarketProfileOrganizationInfoDto(source?: MarketProfileOrganizationInfo | null): ApiMarketProfileOrganizationInfoDto {
  return {
    ExternalSystemsToSendCart: (source?.externalSystemsToSendCart ?? []).map((item) => adaptApiExternalSystemToSendCartDto(item)),
    Guid: source?.guid,
    Id: source?.id,
    Inn: source?.inn,
    IsHomeRegionInfoMessageShow: source?.isHomeRegionInfoMessageShow,
    IsSendCartToExternalSystemsEnabled: source?.isSendCartToExternalSystemsEnabled,
    IsSmsp: source?.isSmsp,
    IsTestOrganization: source?.isTestOrganization,
    Kpp: source?.kpp,
    Name: source?.name,
    OrgAccreditationLevel: adaptApiOrgAccreditationLevelDto(source?.orgAccreditationLevel),
    OrganizationType: adaptApiOrganizationTypeEnum(source?.organizationType),
    ShortName: source?.shortName,
    Unp: source?.unp,
    UserId: source?.userId,
  };
}

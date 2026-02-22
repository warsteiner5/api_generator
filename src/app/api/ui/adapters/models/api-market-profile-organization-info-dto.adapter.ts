import { MarketProfileOrganizationInfo } from '../../models/market-profile-organization-info.interface';
import { ApiMarketProfileOrganizationInfoDto } from '../../../swagger/models/api-market-profile-organization-info-dto';
import { apiExternalSystemToSendCartDtoAdapter } from './api-external-system-to-send-cart-dto.adapter';
import { apiOrgAccreditationLevelDtoAdapter } from './api-org-accreditation-level-dto.adapter';
import { apiOrganizationTypeEnumAdapter } from '../enums/api-organization-type-enum.adapter';

export const apiMarketProfileOrganizationInfoDtoAdapter = (source?: MarketProfileOrganizationInfo | null): ApiMarketProfileOrganizationInfoDto => {
  return {
    ExternalSystemsToSendCart: source?.externalSystemsToSendCart?.map((item) => apiExternalSystemToSendCartDtoAdapter(item)),
    Guid: source?.guid,
    Id: source?.id,
    Inn: source?.inn,
    IsHomeRegionInfoMessageShow: source?.isHomeRegionInfoMessageShow,
    IsSendCartToExternalSystemsEnabled: source?.isSendCartToExternalSystemsEnabled,
    IsSmsp: source?.isSmsp,
    IsTestOrganization: source?.isTestOrganization,
    Kpp: source?.kpp,
    Name: source?.name,
    OrgAccreditationLevel: source?.orgAccreditationLevel === null ? undefined : apiOrgAccreditationLevelDtoAdapter(source?.orgAccreditationLevel),
    OrganizationType: source?.organizationType === null ? undefined : apiOrganizationTypeEnumAdapter(source?.organizationType),
    ShortName: source?.shortName,
    Unp: source?.unp,
    UserId: source?.userId,
  };
}

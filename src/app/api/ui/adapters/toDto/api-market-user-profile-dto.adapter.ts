import { MarketUserProfile } from '../../models/market-user-profile.interface';
import { ApiMarketUserProfileDto } from '../../../swagger/models/api-market-user-profile-dto';
import { adaptApiManagerRegulationStateEnum } from './api-manager-regulation-state-enum.adapter';
import { adaptApiMarketProfileOrganizationInfoDto } from './api-market-profile-organization-info-dto.adapter';
import { adaptApiTariffInfoDto } from './api-tariff-info-dto.adapter';
import { adaptApiTenantRoleEnum } from './api-tenant-role-enum.adapter';
import { adaptApiUserInOrganizationAltDto } from './api-user-in-organization.adapter';

export function adaptApiMarketUserProfileDto(source?: MarketUserProfile | null): ApiMarketUserProfileDto {
  return {
    CurrentCertExpireDate: source?.currentCertExpireDate,
    Email: source?.email,
    FirstName: source?.firstName,
    HasReportRegistryAccess: source?.hasReportRegistryAccess,
    HaveMarketRegulation: source?.haveMarketRegulation,
    HaveStarRegulation: source?.haveStarRegulation,
    Id: source?.id,
    IsCertificateExists: source?.isCertificateExists,
    LastName: source?.lastName,
    Login: source?.login,
    LoginProvider: source?.loginProvider,
    ManagerRegulationState: adaptApiManagerRegulationStateEnum(source?.managerRegulationState),
    MiddleName: source?.middleName,
    Organization: adaptApiMarketProfileOrganizationInfoDto(source?.organization),
    PhoneNumber: source?.phoneNumber,
    Roles: source?.roles ?? [],
    TariffInfo: adaptApiTariffInfoDto(source?.tariffInfo),
    TenantRole: adaptApiTenantRoleEnum(source?.tenantRole),
    UserInOrganizations: (source?.userInOrganizations ?? []).map((item) => adaptApiUserInOrganizationAltDto(item)),
  };
}

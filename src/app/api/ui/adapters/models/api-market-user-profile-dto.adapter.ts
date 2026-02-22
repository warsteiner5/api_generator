import { MarketUserProfile } from '../../models/market-user-profile.interface';
import { ApiMarketUserProfileDto } from '../../../swagger/models/api-market-user-profile-dto';
import { apiManagerRegulationStateEnumAdapter } from '../enums/api-manager-regulation-state-enum.adapter';
import { apiMarketProfileOrganizationInfoDtoAdapter } from './api-market-profile-organization-info-dto.adapter';
import { apiTariffInfoDtoAdapter } from './api-tariff-info-dto.adapter';
import { apiTenantRoleEnumAdapter } from '../enums/api-tenant-role-enum.adapter';
import { apiUserInOrganizationAltDtoAdapter } from './api-user-in-organization.adapter';

export const apiMarketUserProfileDtoAdapter = (source?: MarketUserProfile | null): ApiMarketUserProfileDto => {
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
    ManagerRegulationState: source?.managerRegulationState === null ? undefined : apiManagerRegulationStateEnumAdapter(source?.managerRegulationState),
    MiddleName: source?.middleName,
    Organization: source?.organization === null ? undefined : apiMarketProfileOrganizationInfoDtoAdapter(source?.organization),
    PhoneNumber: source?.phoneNumber,
    Roles: source?.roles,
    TariffInfo: source?.tariffInfo === null ? undefined : apiTariffInfoDtoAdapter(source?.tariffInfo),
    TenantRole: source?.tenantRole === null ? undefined : apiTenantRoleEnumAdapter(source?.tenantRole),
    UserInOrganizations: source?.userInOrganizations?.map((item) => apiUserInOrganizationAltDtoAdapter(item)),
  };
}

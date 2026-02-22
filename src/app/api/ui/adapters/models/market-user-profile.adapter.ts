import { ApiMarketUserProfileDto } from '../../../swagger/models/api-market-user-profile-dto';
import { MarketUserProfile } from '../../models/market-user-profile.interface';
import { managerRegulationStateEnumAdapter } from '../enums/manager-regulation-state-enum.adapter';
import { marketProfileOrganizationInfoAdapter } from './market-profile-organization-info.adapter';
import { tariffInfoAdapter } from './tariff-info.adapter';
import { tenantRoleEnumAdapter } from '../enums/tenant-role-enum.adapter';
import { userInOrganizationAltAdapter } from './user-in-organization-alt.adapter';

export const marketUserProfileAdapter = (source?: ApiMarketUserProfileDto | null): MarketUserProfile => {
  return {
    currentCertExpireDate: source?.CurrentCertExpireDate,
    email: source?.Email,
    firstName: source?.FirstName,
    hasReportRegistryAccess: source?.HasReportRegistryAccess,
    haveMarketRegulation: source?.HaveMarketRegulation,
    haveStarRegulation: source?.HaveStarRegulation,
    id: source?.Id,
    isCertificateExists: source?.IsCertificateExists,
    lastName: source?.LastName,
    login: source?.Login,
    loginProvider: source?.LoginProvider,
    managerRegulationState: source?.ManagerRegulationState === null ? undefined : managerRegulationStateEnumAdapter(source?.ManagerRegulationState),
    middleName: source?.MiddleName,
    organization: source?.Organization === null ? undefined : marketProfileOrganizationInfoAdapter(source?.Organization),
    phoneNumber: source?.PhoneNumber,
    roles: source?.Roles,
    tariffInfo: source?.TariffInfo === null ? undefined : tariffInfoAdapter(source?.TariffInfo),
    tenantRole: source?.TenantRole === null ? undefined : tenantRoleEnumAdapter(source?.TenantRole),
    userInOrganizations: source?.UserInOrganizations?.map((item) => userInOrganizationAltAdapter(item)),
  };
}

import { ApiMarketUserProfileDto } from '../../../swagger/models/api-market-user-profile-dto';
import { MarketUserProfile } from '../../models/market-user-profile.interface';
import { adaptManagerRegulationStateEnumToUI } from './manager-regulation-state-enum.adapter';
import { adaptMarketProfileOrganizationInfoToUI } from './market-profile-organization-info.adapter';
import { adaptTariffInfoToUI } from './tariff-info.adapter';
import { adaptTenantRoleEnumToUI } from './tenant-role-enum.adapter';
import { adaptUserInOrganizationAltToUI } from './user-in-organization-alt.adapter';

export function adaptMarketUserProfileToUI(source?: ApiMarketUserProfileDto | null): MarketUserProfile {
  return {
    currentCertExpireDate: source?.CurrentCertExpireDate ?? '',
    email: source?.Email ?? '',
    firstName: source?.FirstName ?? '',
    hasReportRegistryAccess: source?.HasReportRegistryAccess ?? false,
    haveMarketRegulation: source?.HaveMarketRegulation ?? false,
    haveStarRegulation: source?.HaveStarRegulation ?? false,
    id: source?.Id ?? 0,
    isCertificateExists: source?.IsCertificateExists ?? false,
    lastName: source?.LastName ?? '',
    login: source?.Login ?? '',
    loginProvider: source?.LoginProvider ?? '',
    managerRegulationState: adaptManagerRegulationStateEnumToUI(source?.ManagerRegulationState),
    middleName: source?.MiddleName ?? '',
    organization: adaptMarketProfileOrganizationInfoToUI(source?.Organization),
    phoneNumber: source?.PhoneNumber ?? '',
    roles: source?.Roles ?? [],
    tariffInfo: adaptTariffInfoToUI(source?.TariffInfo),
    tenantRole: adaptTenantRoleEnumToUI(source?.TenantRole),
    userInOrganizations: (source?.UserInOrganizations ?? []).map((item) => adaptUserInOrganizationAltToUI(item)),
  };
}

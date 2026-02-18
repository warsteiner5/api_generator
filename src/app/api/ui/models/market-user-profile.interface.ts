import { ManagerRegulationStateEnum } from '../enums/manager-regulation-state.enum';
import { MarketProfileOrganizationInfo } from './market-profile-organization-info.interface';
import { TariffInfo } from './tariff-info.interface';
import { TenantRoleEnum } from '../enums/tenant-role.enum';
import { UserInOrganizationAlt } from './user-in-organization-alt.interface';

export interface MarketUserProfile {
  currentCertExpireDate: string;
  email: string;
  firstName: string;
  hasReportRegistryAccess: boolean;
  haveMarketRegulation: boolean;
  haveStarRegulation: boolean;
  id: number;
  isCertificateExists: boolean;
  lastName: string;
  login: string;
  loginProvider: string;
  managerRegulationState: ManagerRegulationStateEnum;
  middleName: string;
  organization: MarketProfileOrganizationInfo;
  phoneNumber: string;
  roles: string[];
  tariffInfo: TariffInfo;
  tenantRole: TenantRoleEnum;
  userInOrganizations: UserInOrganizationAlt[];
}

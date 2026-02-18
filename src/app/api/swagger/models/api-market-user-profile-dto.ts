/* tslint:disable */
/* eslint-disable */
import { ApiManagerRegulationStateEnum } from '../models/api-manager-regulation-state-enum';
import { ApiMarketProfileOrganizationInfoDto } from '../models/api-market-profile-organization-info-dto';
import { ApiTariffInfoDto } from '../models/api-tariff-info-dto';
import { ApiTenantRoleEnum } from '../models/api-tenant-role-enum';
import { ApiUserInOrganizationAltDto } from '../models/api-user-in-organization';
export interface ApiMarketUserProfileDto {
  CurrentCertExpireDate?: string | null;
  Email?: string | null;
  FirstName?: string | null;
  HasReportRegistryAccess?: boolean;
  HaveMarketRegulation?: boolean;
  HaveStarRegulation?: boolean;
  Id?: number;
  IsCertificateExists?: boolean;
  LastName?: string | null;
  Login?: string | null;
  LoginProvider?: string | null;
  ManagerRegulationState?: ApiManagerRegulationStateEnum;
  MiddleName?: string | null;
  Organization?: ApiMarketProfileOrganizationInfoDto | null;
  PhoneNumber?: string | null;
  Roles?: Array<string> | null;
  TariffInfo?: ApiTariffInfoDto | null;
  TenantRole?: ApiTenantRoleEnum;
  UserInOrganizations?: Array<ApiUserInOrganizationAltDto> | null;
}

import { OrganizationRegistrationAddress } from './organization-registration-address.interface';
import { OrganizationRegistrationCommon } from './organization-registration-common.interface';
import { OrganizationRegistrationEmployee } from './organization-registration-employee.interface';

// @ts-ignore
export interface OrganizationRegistration {
  addressInfo: OrganizationRegistrationAddress;
  employeeInfo: OrganizationRegistrationEmployee;
  organizationInfo: OrganizationRegistrationCommon;
}

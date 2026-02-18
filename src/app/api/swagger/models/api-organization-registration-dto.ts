/* tslint:disable */
/* eslint-disable */
import { ApiOrganizationRegistrationAddressDto } from '../models/api-organization-registration-address-dto';
import { ApiOrganizationRegistrationCommonDto } from '../models/api-organization-registration-common-dto';
import { ApiOrganizationRegistrationEmployeeDto } from '../models/api-organization-registration-employee-dto';
export interface ApiOrganizationRegistrationDto {
  AddressInfo?: ApiOrganizationRegistrationAddressDto | null;
  EmployeeInfo?: ApiOrganizationRegistrationEmployeeDto | null;
  OrganizationInfo?: ApiOrganizationRegistrationCommonDto | null;
}

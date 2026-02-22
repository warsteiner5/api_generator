import { OrganizationRegistration } from '../../models/organization-registration.interface';
import { ApiOrganizationRegistrationDto } from '../../../swagger/models/api-organization-registration-dto';
import { apiOrganizationRegistrationAddressDtoAdapter } from './api-organization-registration-address-dto.adapter';
import { apiOrganizationRegistrationCommonDtoAdapter } from './api-organization-registration-common-dto.adapter';
import { apiOrganizationRegistrationEmployeeDtoAdapter } from './api-organization-registration-employee-dto.adapter';

export const apiOrganizationRegistrationDtoAdapter = (source?: OrganizationRegistration | null): ApiOrganizationRegistrationDto => {
  return {
    AddressInfo: source?.addressInfo === null ? undefined : apiOrganizationRegistrationAddressDtoAdapter(source?.addressInfo),
    EmployeeInfo: source?.employeeInfo === null ? undefined : apiOrganizationRegistrationEmployeeDtoAdapter(source?.employeeInfo),
    OrganizationInfo: source?.organizationInfo === null ? undefined : apiOrganizationRegistrationCommonDtoAdapter(source?.organizationInfo),
  };
}

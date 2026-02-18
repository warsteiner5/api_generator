import { ApiOrganizationRegistrationDto } from '../../../swagger/models/api-organization-registration-dto';
import { OrganizationRegistration } from '../../models/organization-registration.interface';
import { adaptOrganizationRegistrationAddressToUI } from './organization-registration-address.adapter';
import { adaptOrganizationRegistrationCommonToUI } from './organization-registration-common.adapter';
import { adaptOrganizationRegistrationEmployeeToUI } from './organization-registration-employee.adapter';

export function adaptOrganizationRegistrationToUI(source?: ApiOrganizationRegistrationDto | null): OrganizationRegistration {
  return {
    addressInfo: adaptOrganizationRegistrationAddressToUI(source?.AddressInfo),
    employeeInfo: adaptOrganizationRegistrationEmployeeToUI(source?.EmployeeInfo),
    organizationInfo: adaptOrganizationRegistrationCommonToUI(source?.OrganizationInfo),
  };
}

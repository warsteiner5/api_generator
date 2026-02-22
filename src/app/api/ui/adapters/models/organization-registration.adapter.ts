import { ApiOrganizationRegistrationDto } from '../../../swagger/models/api-organization-registration-dto';
import { OrganizationRegistration } from '../../models/organization-registration.interface';
import { organizationRegistrationAddressAdapter } from './organization-registration-address.adapter';
import { organizationRegistrationCommonAdapter } from './organization-registration-common.adapter';
import { organizationRegistrationEmployeeAdapter } from './organization-registration-employee.adapter';

export const organizationRegistrationAdapter = (source?: ApiOrganizationRegistrationDto | null): OrganizationRegistration => {
  return {
    addressInfo: source?.AddressInfo === null ? undefined : organizationRegistrationAddressAdapter(source?.AddressInfo),
    employeeInfo: source?.EmployeeInfo === null ? undefined : organizationRegistrationEmployeeAdapter(source?.EmployeeInfo),
    organizationInfo: source?.OrganizationInfo === null ? undefined : organizationRegistrationCommonAdapter(source?.OrganizationInfo),
  };
}

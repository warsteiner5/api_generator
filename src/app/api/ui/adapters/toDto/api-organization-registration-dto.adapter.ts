import { OrganizationRegistration } from '../../models/organization-registration.interface';
import { ApiOrganizationRegistrationDto } from '../../../swagger/models/api-organization-registration-dto';
import { adaptApiOrganizationRegistrationAddressDto } from './api-organization-registration-address-dto.adapter';
import { adaptApiOrganizationRegistrationCommonDto } from './api-organization-registration-common-dto.adapter';
import { adaptApiOrganizationRegistrationEmployeeDto } from './api-organization-registration-employee-dto.adapter';

export function adaptApiOrganizationRegistrationDto(source?: OrganizationRegistration | null): ApiOrganizationRegistrationDto {
  return {
    AddressInfo: adaptApiOrganizationRegistrationAddressDto(source?.addressInfo),
    EmployeeInfo: adaptApiOrganizationRegistrationEmployeeDto(source?.employeeInfo),
    OrganizationInfo: adaptApiOrganizationRegistrationCommonDto(source?.organizationInfo),
  };
}

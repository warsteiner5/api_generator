import { ApiOrganizationRegistrationEmployeeDto } from '../../../swagger/models/api-organization-registration-employee-dto';
import { OrganizationRegistrationEmployee } from '../../models/organization-registration-employee.interface';

export function adaptOrganizationRegistrationEmployeeToUI(source?: ApiOrganizationRegistrationEmployeeDto | null): OrganizationRegistrationEmployee {
  return {
    email: source?.Email ?? '',
    firstName: source?.FirstName ?? '',
    lastName: source?.LastName ?? '',
    login: source?.Login ?? '',
    middleName: source?.MiddleName ?? '',
    password: source?.Password ?? '',
    phoneNumber: source?.PhoneNumber ?? '',
    position: source?.Position ?? '',
  };
}

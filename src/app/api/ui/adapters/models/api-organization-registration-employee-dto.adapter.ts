import { OrganizationRegistrationEmployee } from '../../models/organization-registration-employee.interface';
import { ApiOrganizationRegistrationEmployeeDto } from '../../../swagger/models/api-organization-registration-employee-dto';

export const apiOrganizationRegistrationEmployeeDtoAdapter = (source?: OrganizationRegistrationEmployee | null): ApiOrganizationRegistrationEmployeeDto => {
  return {
    Email: source?.email,
    FirstName: source?.firstName,
    LastName: source?.lastName,
    Login: source?.login,
    MiddleName: source?.middleName,
    Password: source?.password,
    PhoneNumber: source?.phoneNumber,
    Position: source?.position,
  };
}

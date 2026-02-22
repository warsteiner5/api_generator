import { ApiOrganizationEmployeesInfoDto } from '../../../swagger/models/api-organization-employees-info-dto';
import { OrganizationEmployeesInfo } from '../../models/organization-employees-info.interface';

export const organizationEmployeesInfoAdapter = (source?: ApiOrganizationEmployeesInfoDto | null): OrganizationEmployeesInfo => {
  return {
    director: source?.Director,
    directorPosition: source?.DirectorPosition,
    employeeCount: source?.EmployeeCount,
  };
}

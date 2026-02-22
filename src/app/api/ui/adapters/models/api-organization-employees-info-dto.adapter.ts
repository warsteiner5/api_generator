import { OrganizationEmployeesInfo } from '../../models/organization-employees-info.interface';
import { ApiOrganizationEmployeesInfoDto } from '../../../swagger/models/api-organization-employees-info-dto';

export const apiOrganizationEmployeesInfoDtoAdapter = (source?: OrganizationEmployeesInfo | null): ApiOrganizationEmployeesInfoDto => {
  return {
    Director: source?.director,
    DirectorPosition: source?.directorPosition,
    EmployeeCount: source?.employeeCount,
  };
}

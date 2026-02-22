import { ApiEmployeeRoleDto } from '../../../swagger/models/api-employee-role-dto';
import { EmployeeRole } from '../../models/employee-role.interface';

export const employeeRoleAdapter = (source?: ApiEmployeeRoleDto | null): EmployeeRole => {
  return {
    description: source?.Description,
    id: source?.Id,
    isChecked: source?.IsChecked,
    name: source?.Name,
  };
}

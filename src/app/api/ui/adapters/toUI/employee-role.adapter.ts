import { ApiEmployeeRoleDto } from '../../../swagger/models/api-employee-role-dto';
import { EmployeeRole } from '../../models/employee-role.interface';

export function adaptEmployeeRoleToUI(source?: ApiEmployeeRoleDto | null): EmployeeRole {
  return {
    description: source?.Description ?? '',
    id: source?.Id ?? 0,
    isChecked: source?.IsChecked ?? false,
    name: source?.Name ?? '',
  };
}

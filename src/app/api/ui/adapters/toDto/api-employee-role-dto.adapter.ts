import { EmployeeRole } from '../../models/employee-role.interface';
import { ApiEmployeeRoleDto } from '../../../swagger/models/api-employee-role-dto';

export function adaptApiEmployeeRoleDto(source?: EmployeeRole | null): ApiEmployeeRoleDto {
  return {
    Description: source?.description,
    Id: source?.id,
    IsChecked: source?.isChecked,
    Name: source?.name,
  };
}

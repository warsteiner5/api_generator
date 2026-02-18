import { EmployeeWorkGroup } from '../../models/employee-work-group.interface';
import { ApiEmployeeWorkGroupDto } from '../../../swagger/models/api-employee-work-group-dto';
import { adaptApiEmployeeRoleDto } from './api-employee-role-dto.adapter';

export function adaptApiEmployeeWorkGroupDto(source?: EmployeeWorkGroup | null): ApiEmployeeWorkGroupDto {
  return {
    Id: source?.id,
    Name: source?.name,
    Roles: (source?.roles ?? []).map((item) => adaptApiEmployeeRoleDto(item)),
  };
}

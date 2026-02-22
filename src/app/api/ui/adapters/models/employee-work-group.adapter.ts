import { ApiEmployeeWorkGroupDto } from '../../../swagger/models/api-employee-work-group-dto';
import { EmployeeWorkGroup } from '../../models/employee-work-group.interface';
import { employeeRoleAdapter } from './employee-role.adapter';

export const employeeWorkGroupAdapter = (source?: ApiEmployeeWorkGroupDto | null): EmployeeWorkGroup => {
  return {
    id: source?.Id,
    name: source?.Name,
    roles: source?.Roles?.map((item) => employeeRoleAdapter(item)),
  };
}

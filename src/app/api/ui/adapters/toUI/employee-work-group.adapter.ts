import { ApiEmployeeWorkGroupDto } from '../../../swagger/models/api-employee-work-group-dto';
import { EmployeeWorkGroup } from '../../models/employee-work-group.interface';
import { adaptEmployeeRoleToUI } from './employee-role.adapter';

export function adaptEmployeeWorkGroupToUI(source?: ApiEmployeeWorkGroupDto | null): EmployeeWorkGroup {
  return {
    id: source?.Id ?? 0,
    name: source?.Name ?? '',
    roles: (source?.Roles ?? []).map((item) => adaptEmployeeRoleToUI(item)),
  };
}

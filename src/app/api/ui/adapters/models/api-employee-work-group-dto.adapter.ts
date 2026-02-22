import { EmployeeWorkGroup } from '../../models/employee-work-group.interface';
import { ApiEmployeeWorkGroupDto } from '../../../swagger/models/api-employee-work-group-dto';
import { apiEmployeeRoleDtoAdapter } from './api-employee-role-dto.adapter';

export const apiEmployeeWorkGroupDtoAdapter = (source?: EmployeeWorkGroup | null): ApiEmployeeWorkGroupDto => {
  return {
    Id: source?.id,
    Name: source?.name,
    Roles: source?.roles?.map((item) => apiEmployeeRoleDtoAdapter(item)),
  };
}

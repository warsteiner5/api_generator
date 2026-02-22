import { RolePermissionGroup } from '../../models/role-permission-group.interface';
import { ApiRolePermissionGroupDto } from '../../../swagger/models/api-role-permission-group-dto';
import { apiRolePermissionDtoAdapter } from './api-role-permission-dto.adapter';

export const apiRolePermissionGroupDtoAdapter = (source?: RolePermissionGroup | null): ApiRolePermissionGroupDto => {
  return {
    Id: source?.id,
    Name: source?.name,
    Permissions: source?.permissions?.map((item) => apiRolePermissionDtoAdapter(item)),
  };
}

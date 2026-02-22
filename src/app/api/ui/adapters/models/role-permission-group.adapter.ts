import { ApiRolePermissionGroupDto } from '../../../swagger/models/api-role-permission-group-dto';
import { RolePermissionGroup } from '../../models/role-permission-group.interface';
import { rolePermissionAdapter } from './role-permission.adapter';

export const rolePermissionGroupAdapter = (source?: ApiRolePermissionGroupDto | null): RolePermissionGroup => {
  return {
    id: source?.Id,
    name: source?.Name,
    permissions: source?.Permissions?.map((item) => rolePermissionAdapter(item)),
  };
}

import { ApiRolePermissionGroupDto } from '../../../swagger/models/api-role-permission-group-dto';
import { RolePermissionGroup } from '../../models/role-permission-group.interface';
import { adaptRolePermissionToUI } from './role-permission.adapter';

export function adaptRolePermissionGroupToUI(source?: ApiRolePermissionGroupDto | null): RolePermissionGroup {
  return {
    id: source?.Id ?? 0,
    name: source?.Name ?? '',
    permissions: (source?.Permissions ?? []).map((item) => adaptRolePermissionToUI(item)),
  };
}

import { ApiRolePermissionDto } from '../../../swagger/models/api-role-permission-dto';
import { RolePermission } from '../../models/role-permission.interface';

export const rolePermissionAdapter = (source?: ApiRolePermissionDto | null): RolePermission => {
  return {
    description: source?.Description,
    id: source?.Id,
    isChecked: source?.IsChecked,
    name: source?.Name,
  };
}

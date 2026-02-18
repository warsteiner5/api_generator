import { ApiRolePermissionDto } from '../../../swagger/models/api-role-permission-dto';
import { RolePermission } from '../../models/role-permission.interface';

export function adaptRolePermissionToUI(source?: ApiRolePermissionDto | null): RolePermission {
  return {
    description: source?.Description ?? '',
    id: source?.Id ?? 0,
    isChecked: source?.IsChecked ?? false,
    name: source?.Name ?? '',
  };
}

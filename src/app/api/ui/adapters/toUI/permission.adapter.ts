import { ApiPermissionDto } from '../../../swagger/models/api-permission-dto';
import { Permission } from '../../models/permission.interface';

export function adaptPermissionToUI(source?: ApiPermissionDto | null): Permission {
  return {
    id: source?.Id ?? 0,
    name: source?.Name ?? '',
    permissionGroupId: source?.PermissionGroupId ?? 0,
  };
}

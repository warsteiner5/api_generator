import { ApiPermissionDto } from '../../../swagger/models/api-permission-dto';
import { Permission } from '../../models/permission.interface';

export const permissionAdapter = (source?: ApiPermissionDto | null): Permission => {
  return {
    id: source?.Id,
    name: source?.Name,
    permissionGroupId: source?.PermissionGroupId,
  };
}

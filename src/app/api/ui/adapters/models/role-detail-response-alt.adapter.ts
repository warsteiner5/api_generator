import { ApiRoleDetailResponseAltDto } from '../../../swagger/models/api-role-detail-response';
import { RoleDetailResponseAlt } from '../../models/role-detail-response-alt.interface';
import { rolePermissionGroupAdapter } from './role-permission-group.adapter';

export const roleDetailResponseAltAdapter = (source?: ApiRoleDetailResponseAltDto | null): RoleDetailResponseAlt => {
  return {
    description: source?.Description,
    id: source?.Id,
    name: source?.Name,
    permissionGroups: source?.PermissionGroups?.map((item) => rolePermissionGroupAdapter(item)),
  };
}

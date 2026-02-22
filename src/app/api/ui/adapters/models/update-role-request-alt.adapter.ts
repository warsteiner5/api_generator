import { ApiUpdateRoleRequestAltDto } from '../../../swagger/models/api-update-role-request';
import { UpdateRoleRequestAlt } from '../../models/update-role-request-alt.interface';
import { rolePermissionGroupAdapter } from './role-permission-group.adapter';

export const updateRoleRequestAltAdapter = (source?: ApiUpdateRoleRequestAltDto | null): UpdateRoleRequestAlt => {
  return {
    description: source?.Description,
    name: source?.Name,
    permissionGroups: source?.PermissionGroups?.map((item) => rolePermissionGroupAdapter(item)),
  };
}

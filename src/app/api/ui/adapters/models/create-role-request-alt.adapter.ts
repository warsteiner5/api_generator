import { ApiCreateRoleRequestAltDto } from '../../../swagger/models/api-create-role-request';
import { CreateRoleRequestAlt } from '../../models/create-role-request-alt.interface';
import { rolePermissionGroupAdapter } from './role-permission-group.adapter';

export const createRoleRequestAltAdapter = (source?: ApiCreateRoleRequestAltDto | null): CreateRoleRequestAlt => {
  return {
    description: source?.Description,
    name: source?.Name,
    permissionGroups: source?.PermissionGroups?.map((item) => rolePermissionGroupAdapter(item)),
  };
}

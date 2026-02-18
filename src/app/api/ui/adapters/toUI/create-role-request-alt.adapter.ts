import { ApiCreateRoleRequestAltDto } from '../../../swagger/models/api-create-role-request';
import { CreateRoleRequestAlt } from '../../models/create-role-request-alt.interface';
import { adaptRolePermissionGroupToUI } from './role-permission-group.adapter';

export function adaptCreateRoleRequestAltToUI(source?: ApiCreateRoleRequestAltDto | null): CreateRoleRequestAlt {
  return {
    description: source?.Description ?? '',
    name: source?.Name ?? '',
    permissionGroups: (source?.PermissionGroups ?? []).map((item) => adaptRolePermissionGroupToUI(item)),
  };
}

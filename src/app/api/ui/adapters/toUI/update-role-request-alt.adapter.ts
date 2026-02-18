import { ApiUpdateRoleRequestAltDto } from '../../../swagger/models/api-update-role-request';
import { UpdateRoleRequestAlt } from '../../models/update-role-request-alt.interface';
import { adaptRolePermissionGroupToUI } from './role-permission-group.adapter';

export function adaptUpdateRoleRequestAltToUI(source?: ApiUpdateRoleRequestAltDto | null): UpdateRoleRequestAlt {
  return {
    description: source?.Description ?? '',
    name: source?.Name ?? '',
    permissionGroups: (source?.PermissionGroups ?? []).map((item) => adaptRolePermissionGroupToUI(item)),
  };
}

import { ApiRoleDetailResponseAltDto } from '../../../swagger/models/api-role-detail-response';
import { RoleDetailResponseAlt } from '../../models/role-detail-response-alt.interface';
import { adaptRolePermissionGroupToUI } from './role-permission-group.adapter';

export function adaptRoleDetailResponseAltToUI(source?: ApiRoleDetailResponseAltDto | null): RoleDetailResponseAlt {
  return {
    description: source?.Description ?? '',
    id: source?.Id ?? 0,
    name: source?.Name ?? '',
    permissionGroups: (source?.PermissionGroups ?? []).map((item) => adaptRolePermissionGroupToUI(item)),
  };
}

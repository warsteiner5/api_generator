import { ApiTreePermissionGroupAltDto } from '../../../swagger/models/api-tree-permission-group';
import { TreePermissionGroupAlt } from '../../models/tree-permission-group-alt.interface';
import { adaptTreeNodePermissionsStatusAltEnumToUI } from './tree-node-permissions-status-alt-enum.adapter';

export function adaptTreePermissionGroupAltToUI(source?: ApiTreePermissionGroupAltDto | null): TreePermissionGroupAlt {
  return {
    mark: source?.Mark ?? '',
    name: source?.Name ?? '',
    status: adaptTreeNodePermissionsStatusAltEnumToUI(source?.Status),
  };
}

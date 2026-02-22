import { ApiTreePermissionGroupAltDto } from '../../../swagger/models/api-tree-permission-group';
import { TreePermissionGroupAlt } from '../../models/tree-permission-group-alt.interface';
import { treeNodePermissionsStatusAltEnumAdapter } from '../enums/tree-node-permissions-status-alt-enum.adapter';

export const treePermissionGroupAltAdapter = (source?: ApiTreePermissionGroupAltDto | null): TreePermissionGroupAlt => {
  return {
    mark: source?.Mark,
    name: source?.Name,
    status: source?.Status === null ? undefined : treeNodePermissionsStatusAltEnumAdapter(source?.Status),
  };
}

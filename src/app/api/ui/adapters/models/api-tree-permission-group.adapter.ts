import { TreePermissionGroupAlt } from '../../models/tree-permission-group-alt.interface';
import { ApiTreePermissionGroupAltDto } from '../../../swagger/models/api-tree-permission-group';
import { apiTreeNodePermissionsStatusAltEnumAdapter } from '../enums/api-tree-node-permissions-status.adapter';

export const apiTreePermissionGroupAltDtoAdapter = (source?: TreePermissionGroupAlt | null): ApiTreePermissionGroupAltDto => {
  return {
    Mark: source?.mark,
    Name: source?.name,
    Status: source?.status === null ? undefined : apiTreeNodePermissionsStatusAltEnumAdapter(source?.status),
  };
}

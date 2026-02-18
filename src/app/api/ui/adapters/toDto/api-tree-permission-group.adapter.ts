import { TreePermissionGroupAlt } from '../../models/tree-permission-group-alt.interface';
import { ApiTreePermissionGroupAltDto } from '../../../swagger/models/api-tree-permission-group';
import { adaptApiTreeNodePermissionsStatusAltEnum } from './api-tree-node-permissions-status.adapter';

export function adaptApiTreePermissionGroupAltDto(source?: TreePermissionGroupAlt | null): ApiTreePermissionGroupAltDto {
  return {
    Mark: source?.mark,
    Name: source?.name,
    Status: adaptApiTreeNodePermissionsStatusAltEnum(source?.status),
  };
}

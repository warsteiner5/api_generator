import { RolePermissionGroup } from './role-permission-group.interface';

export interface UpdateRoleRequestAlt {
  description: string;
  name: string;
  permissionGroups: RolePermissionGroup[];
}

import { RolePermissionGroup } from './role-permission-group.interface';

// @ts-ignore
export interface UpdateRoleRequestAlt {
  description: string;
  name: string;
  permissionGroups: RolePermissionGroup[];
}

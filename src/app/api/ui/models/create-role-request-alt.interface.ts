import { RolePermissionGroup } from './role-permission-group.interface';

// @ts-ignore
export interface CreateRoleRequestAlt {
  description: string;
  name: string;
  permissionGroups: RolePermissionGroup[];
}

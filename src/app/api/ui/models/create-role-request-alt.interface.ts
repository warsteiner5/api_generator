import { RolePermissionGroup } from './role-permission-group.interface';

export interface CreateRoleRequestAlt {
  description: string;
  name: string;
  permissionGroups: RolePermissionGroup[];
}

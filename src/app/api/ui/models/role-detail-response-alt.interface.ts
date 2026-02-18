import { RolePermissionGroup } from './role-permission-group.interface';

export interface RoleDetailResponseAlt {
  description: string;
  id: number;
  name: string;
  permissionGroups: RolePermissionGroup[];
}

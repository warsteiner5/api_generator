import { RolePermissionGroup } from './role-permission-group.interface';

// @ts-ignore
export interface RoleDetailResponseAlt {
  description: string;
  id: number;
  name: string;
  permissionGroups: RolePermissionGroup[];
}

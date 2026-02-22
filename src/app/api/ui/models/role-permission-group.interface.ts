import { RolePermission } from './role-permission.interface';

// @ts-ignore
export interface RolePermissionGroup {
  id: number;
  name: string;
  permissions: RolePermission[];
}

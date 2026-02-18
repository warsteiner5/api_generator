import { RolePermission } from './role-permission.interface';

export interface RolePermissionGroup {
  id: number;
  name: string;
  permissions: RolePermission[];
}

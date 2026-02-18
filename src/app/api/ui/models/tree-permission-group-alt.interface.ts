import { TreeNodePermissionsStatusAltEnum } from '../enums/tree-node-permissions-status-alt.enum';

export interface TreePermissionGroupAlt {
  mark: string;
  name: string;
  status: TreeNodePermissionsStatusAltEnum;
}

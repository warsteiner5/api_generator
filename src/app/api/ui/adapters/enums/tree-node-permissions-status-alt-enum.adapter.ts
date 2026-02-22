import { ApiTreeNodePermissionsStatusAltEnum } from '../../../swagger/models/api-tree-node-permissions-status';
import { TreeNodePermissionsStatusAltEnum } from '../../enums/tree-node-permissions-status-alt.enum';

export const treeNodePermissionsStatusAltEnumAdapter = (source?: ApiTreeNodePermissionsStatusAltEnum | null): TreeNodePermissionsStatusAltEnum => {
  switch (source) {
    case ApiTreeNodePermissionsStatusAltEnum.Enable:
      return TreeNodePermissionsStatusAltEnum.Enable;
    case ApiTreeNodePermissionsStatusAltEnum.Disable:
      return TreeNodePermissionsStatusAltEnum.Disable;
    default:
      throw new Error(`Enum value is not defined: ApiTreeNodePermissionsStatusAltEnum=${String(source)}`);
  }
}

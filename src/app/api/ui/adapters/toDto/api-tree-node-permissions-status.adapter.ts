import { TreeNodePermissionsStatusAltEnum } from '../../enums/tree-node-permissions-status-alt.enum';
import { ApiTreeNodePermissionsStatusAltEnum } from '../../../swagger/models/api-tree-node-permissions-status';

export function adaptApiTreeNodePermissionsStatusAltEnum(source?: TreeNodePermissionsStatusAltEnum | null): ApiTreeNodePermissionsStatusAltEnum {
  switch (source) {
    case TreeNodePermissionsStatusAltEnum.Enable:
      return ApiTreeNodePermissionsStatusAltEnum.Enable;
    case TreeNodePermissionsStatusAltEnum.Disable:
      return ApiTreeNodePermissionsStatusAltEnum.Disable;
    default:
      throw new Error(`Enum value is not defined: TreeNodePermissionsStatusAltEnum=${String(source)}`);
  }
}

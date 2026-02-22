import { TreeNode } from '../../models/tree-node.interface';
import { ApiTreeNodeDto } from '../../../swagger/models/api-tree-node-dto';

export const apiTreeNodeDtoAdapter = (source?: TreeNode | null): ApiTreeNodeDto => {
  return (source ?? {}) as ApiTreeNodeDto;
}

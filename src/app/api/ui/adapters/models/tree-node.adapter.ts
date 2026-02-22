import { ApiTreeNodeDto } from '../../../swagger/models/api-tree-node-dto';
import { TreeNode } from '../../models/tree-node.interface';

export const treeNodeAdapter = (source?: ApiTreeNodeDto | null): TreeNode => {
  return (source ?? {}) as TreeNode;
}

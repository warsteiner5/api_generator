import { ApiTreeNodeDto } from '../../../swagger/models/api-tree-node-dto';
import { TreeNode } from '../../models/tree-node.interface';

export function adaptTreeNodeToUI(source?: ApiTreeNodeDto | null): TreeNode {
  return (source ?? {}) as TreeNode;
}

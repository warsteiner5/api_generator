import { ApiTreeNodeDto } from '../../../swagger/models/api-tree-node-dto';
import { TreeNode } from '../../models/tree-node.interface';
import { treeNodeItemAdapter } from './tree-node-item.adapter';

export const treeNodeAdapter = (source?: ApiTreeNodeDto | null): TreeNode => {
  return {
    ...treeNodeItemAdapter(source as unknown as Parameters<typeof treeNodeItemAdapter>[0]),
    parentId: source?.ParentId,
  };
}

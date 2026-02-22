import { TreeNodeItem } from './tree-node-item.interface';

// @ts-ignore
export interface TreeNode extends TreeNodeItem {
  parentId: number;
}

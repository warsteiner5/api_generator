import { TreeNodeItem } from './tree-node-item.interface';

export type TreeNode = TreeNodeItem & { 'ParentId'?: number | null; };

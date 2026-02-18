import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { TreeNode } from './tree-node.interface';

export type MarketJsonResultOfListOfTreeNode = MarketJsonVoidResultAlt & { 'data'?: Array<TreeNode> | null; };

import { ApiMarketJsonResultOfListOfTreeNodeDto } from '../../../swagger/models/api-market-json-result-of-list-of-tree-node-dto';
import { MarketJsonResultOfListOfTreeNode } from '../../models/market-json-result-of-list-of-tree-node.interface';

export function adaptMarketJsonResultOfListOfTreeNodeToUI(source?: ApiMarketJsonResultOfListOfTreeNodeDto | null): MarketJsonResultOfListOfTreeNode {
  return (source ?? {}) as MarketJsonResultOfListOfTreeNode;
}

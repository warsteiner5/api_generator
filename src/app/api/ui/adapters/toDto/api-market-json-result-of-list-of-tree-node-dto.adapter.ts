import { MarketJsonResultOfListOfTreeNode } from '../../models/market-json-result-of-list-of-tree-node.interface';
import { ApiMarketJsonResultOfListOfTreeNodeDto } from '../../../swagger/models/api-market-json-result-of-list-of-tree-node-dto';

export function adaptApiMarketJsonResultOfListOfTreeNodeDto(source?: MarketJsonResultOfListOfTreeNode | null): ApiMarketJsonResultOfListOfTreeNodeDto {
  return (source ?? {}) as ApiMarketJsonResultOfListOfTreeNodeDto;
}

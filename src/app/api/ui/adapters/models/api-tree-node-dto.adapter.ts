import { TreeNode } from '../../models/tree-node.interface';
import { ApiTreeNodeDto } from '../../../swagger/models/api-tree-node-dto';
import { apiTreeNodeItemDtoAdapter } from './api-tree-node-item-dto.adapter';

export const apiTreeNodeDtoAdapter = (source?: TreeNode | null): ApiTreeNodeDto => {
  return {
    ...apiTreeNodeItemDtoAdapter(source as unknown as Parameters<typeof apiTreeNodeItemDtoAdapter>[0]),
    ParentId: source?.parentId,
  };
}

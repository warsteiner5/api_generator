import { ApiTreeNodeItemDto } from '../../../swagger/models/api-tree-node-item-dto';
import { TreeNodeItem } from '../../models/tree-node-item.interface';
import { catalogItemAdapter } from './catalog-item.adapter';
import { treePermissionGroupAltAdapter } from './tree-permission-group-alt.adapter';

export const treeNodeItemAdapter = (source?: ApiTreeNodeItemDto | null): TreeNodeItem => {
  return {
    catalogItem: source?.CatalogItem === null ? undefined : catalogItemAdapter(source?.CatalogItem),
    group: source?.Group === null ? undefined : treePermissionGroupAltAdapter(source?.Group),
    id: source?.Id,
    level: source?.Level,
  };
}

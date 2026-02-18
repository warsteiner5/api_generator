import { ApiTreeNodeItemDto } from '../../../swagger/models/api-tree-node-item-dto';
import { TreeNodeItem } from '../../models/tree-node-item.interface';
import { adaptCatalogItemToUI } from './catalog-item.adapter';
import { adaptTreePermissionGroupAltToUI } from './tree-permission-group-alt.adapter';

export function adaptTreeNodeItemToUI(source?: ApiTreeNodeItemDto | null): TreeNodeItem {
  return {
    catalogItem: adaptCatalogItemToUI(source?.CatalogItem),
    group: adaptTreePermissionGroupAltToUI(source?.Group),
    id: source?.Id ?? 0,
    level: source?.Level ?? 0,
  };
}

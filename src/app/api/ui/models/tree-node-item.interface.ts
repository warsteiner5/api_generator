import { CatalogItem } from './catalog-item.interface';
import { TreePermissionGroupAlt } from './tree-permission-group-alt.interface';

export interface TreeNodeItem {
  catalogItem: CatalogItem;
  group: TreePermissionGroupAlt;
  id: number;
  level: number;
}

import { TreeNodeItem } from '../../models/tree-node-item.interface';
import { ApiTreeNodeItemDto } from '../../../swagger/models/api-tree-node-item-dto';
import { apiCatalogItemDtoAdapter } from './api-catalog-item-dto.adapter';
import { apiTreePermissionGroupAltDtoAdapter } from './api-tree-permission-group.adapter';

export const apiTreeNodeItemDtoAdapter = (source?: TreeNodeItem | null): ApiTreeNodeItemDto => {
  return {
    CatalogItem: source?.catalogItem === null ? undefined : apiCatalogItemDtoAdapter(source?.catalogItem),
    Group: source?.group === null ? undefined : apiTreePermissionGroupAltDtoAdapter(source?.group),
    Id: source?.id,
    Level: source?.level,
  };
}

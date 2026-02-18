import { TreeNodeItem } from '../../models/tree-node-item.interface';
import { ApiTreeNodeItemDto } from '../../../swagger/models/api-tree-node-item-dto';
import { adaptApiCatalogItemDto } from './api-catalog-item-dto.adapter';
import { adaptApiTreePermissionGroupAltDto } from './api-tree-permission-group.adapter';

export function adaptApiTreeNodeItemDto(source?: TreeNodeItem | null): ApiTreeNodeItemDto {
  return {
    CatalogItem: adaptApiCatalogItemDto(source?.catalogItem),
    Group: adaptApiTreePermissionGroupAltDto(source?.group),
    Id: source?.id,
    Level: source?.level,
  };
}

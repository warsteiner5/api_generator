/* tslint:disable */
/* eslint-disable */
import { ApiCatalogItemDto } from '../models/api-catalog-item-dto';
import { ApiTreePermissionGroupAltDto } from '../models/api-tree-permission-group';
export interface ApiTreeNodeItemDto {
  CatalogItem?: ApiCatalogItemDto | null;
  Group?: ApiTreePermissionGroupAltDto | null;
  Id?: number;
  Level?: number;
}

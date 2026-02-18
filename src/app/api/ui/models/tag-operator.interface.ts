import { TagObjectEnum } from '../enums/tag-object.enum';

export interface TagOperator {
  code: string;
  description: string;
  filterText: string;
  hideable: boolean;
  hintText: string;
  id: number;
  imageGuid: string;
  isActive: boolean;
  isEnabledByDefault: boolean;
  isTenantsIncluded: boolean;
  name: string;
  tagObject: TagObjectEnum;
  tenantIds: number[];
}

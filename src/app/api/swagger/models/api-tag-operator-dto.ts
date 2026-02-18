/* tslint:disable */
/* eslint-disable */
import { ApiTagObjectEnum } from '../models/api-tag-object-enum';
export interface ApiTagOperatorDto {
  Code?: string | null;
  Description?: string | null;
  FilterText?: string | null;
  Hideable?: boolean;
  HintText?: string | null;
  Id?: number;
  ImageGuid?: string;
  IsActive?: boolean;
  IsEnabledByDefault?: boolean;
  IsTenantsIncluded?: boolean;
  Name?: string | null;
  TagObject?: ApiTagObjectEnum;
  TenantIds?: Array<number> | null;
}

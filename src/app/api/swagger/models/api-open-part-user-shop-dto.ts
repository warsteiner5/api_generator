/* tslint:disable */
/* eslint-disable */
import { ApiTenantFlowTypeAltEnum } from '../models/api-tenant-flow-type';
export interface ApiOpenPartUserShopDto {
  ImageId?: string;
  ImageSrc?: string | null;
  IsCorporate?: boolean;
  IsGlobalMarket?: boolean;
  Name?: string | null;
  OrderIndex?: number;
  TenantFlowType?: ApiTenantFlowTypeAltEnum;
  TenantId?: number;
  Url?: string | null;
}

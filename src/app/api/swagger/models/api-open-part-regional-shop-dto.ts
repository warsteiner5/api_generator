/* tslint:disable */
/* eslint-disable */
import { ApiDistrictNameEnum } from '../models/api-district-name-enum';
import { ApiTenantFlowTypeAltEnum } from '../models/api-tenant-flow-type';
export interface ApiOpenPartRegionalShopDto {
  DistrictId?: ApiDistrictNameEnum | null;
  ImageId?: string;
  Name?: string | null;
  OrderIndex?: number;
  RegionCode?: number | null;
  TenantFlowType?: ApiTenantFlowTypeAltEnum;
  TenantId?: number;
  Url?: string | null;
}

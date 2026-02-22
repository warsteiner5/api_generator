import { DistrictNameEnum } from '../enums/district-name.enum';
import { TenantFlowTypeAltEnum } from '../enums/tenant-flow-type-alt.enum';

// @ts-ignore
export interface OpenPartRegionalShop {
  districtId: DistrictNameEnum;
  imageId: string;
  name: string;
  orderIndex: number;
  regionCode: number;
  tenantFlowType: TenantFlowTypeAltEnum;
  tenantId: number;
  url: string;
}

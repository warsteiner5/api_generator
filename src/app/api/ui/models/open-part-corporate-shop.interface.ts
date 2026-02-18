import { TenantFlowTypeAltEnum } from '../enums/tenant-flow-type-alt.enum';

export interface OpenPartCorporateShop {
  imageId: string;
  name: string;
  orderIndex: number;
  tenantFlowType: TenantFlowTypeAltEnum;
  tenantId: number;
  url: string;
}

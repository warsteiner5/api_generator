import { TenantFlowTypeAltEnum } from '../enums/tenant-flow-type-alt.enum';

// @ts-ignore
export interface OpenPartUserShop {
  imageId: string;
  imageSrc: string;
  isCorporate: boolean;
  isGlobalMarket: boolean;
  name: string;
  orderIndex: number;
  tenantFlowType: TenantFlowTypeAltEnum;
  tenantId: number;
  url: string;
}

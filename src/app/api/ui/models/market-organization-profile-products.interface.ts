import { MarketOrganizationProduct } from './market-organization-product.interface';

// @ts-ignore
export interface MarketOrganizationProfileProducts {
  isExporter: boolean;
  isManufacturer: boolean;
  products: MarketOrganizationProduct[];
}

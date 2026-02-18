import { MarketOrganizationProduct } from './market-organization-product.interface';

export interface MarketOrganizationProfileProducts {
  isExporter: boolean;
  isManufacturer: boolean;
  products: MarketOrganizationProduct[];
}

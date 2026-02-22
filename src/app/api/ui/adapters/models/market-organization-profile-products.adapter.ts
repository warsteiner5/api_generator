import { ApiMarketOrganizationProfileProductsDto } from '../../../swagger/models/api-market-organization-profile-products-dto';
import { MarketOrganizationProfileProducts } from '../../models/market-organization-profile-products.interface';
import { marketOrganizationProductAdapter } from './market-organization-product.adapter';

export const marketOrganizationProfileProductsAdapter = (source?: ApiMarketOrganizationProfileProductsDto | null): MarketOrganizationProfileProducts => {
  return {
    isExporter: source?.IsExporter,
    isManufacturer: source?.IsManufacturer,
    products: source?.Products?.map((item) => marketOrganizationProductAdapter(item)),
  };
}

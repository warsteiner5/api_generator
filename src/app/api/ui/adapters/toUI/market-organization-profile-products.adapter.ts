import { ApiMarketOrganizationProfileProductsDto } from '../../../swagger/models/api-market-organization-profile-products-dto';
import { MarketOrganizationProfileProducts } from '../../models/market-organization-profile-products.interface';
import { adaptMarketOrganizationProductToUI } from './market-organization-product.adapter';

export function adaptMarketOrganizationProfileProductsToUI(source?: ApiMarketOrganizationProfileProductsDto | null): MarketOrganizationProfileProducts {
  return {
    isExporter: source?.IsExporter ?? false,
    isManufacturer: source?.IsManufacturer ?? false,
    products: (source?.Products ?? []).map((item) => adaptMarketOrganizationProductToUI(item)),
  };
}

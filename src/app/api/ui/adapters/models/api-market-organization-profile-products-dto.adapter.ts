import { MarketOrganizationProfileProducts } from '../../models/market-organization-profile-products.interface';
import { ApiMarketOrganizationProfileProductsDto } from '../../../swagger/models/api-market-organization-profile-products-dto';
import { apiMarketOrganizationProductDtoAdapter } from './api-market-organization-product-dto.adapter';

export const apiMarketOrganizationProfileProductsDtoAdapter = (source?: MarketOrganizationProfileProducts | null): ApiMarketOrganizationProfileProductsDto => {
  return {
    IsExporter: source?.isExporter,
    IsManufacturer: source?.isManufacturer,
    Products: source?.products?.map((item) => apiMarketOrganizationProductDtoAdapter(item)),
  };
}

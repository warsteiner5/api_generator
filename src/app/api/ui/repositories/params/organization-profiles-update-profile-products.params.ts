import { MarketOrganizationProfileProducts } from '../../models/market-organization-profile-products.interface';
import { OrganizationProfilesUpdateProfileProducts$Params } from '../../../swagger/fn/organization-profiles/organization-profiles-update-profile-products';
import { adaptApiMarketOrganizationProfileProductsDto } from '../../adapters/toDto/api-market-organization-profile-products-dto.adapter';

export interface OrganizationProfilesUpdateProfileProductsParams {
  body?: MarketOrganizationProfileProducts;
}

export const organizationProfilesUpdateProfileProductsParamsAdapter = {
  adapt(params?: OrganizationProfilesUpdateProfileProductsParams): OrganizationProfilesUpdateProfileProducts$Params {
    if (!params) {
      return {} as OrganizationProfilesUpdateProfileProducts$Params;
    }
    return {
      body: adaptApiMarketOrganizationProfileProductsDto(params.body),
    };
  }
};

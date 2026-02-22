import { MarketOrganizationProfileProducts } from '../../models/market-organization-profile-products.interface';
import { OrganizationProfilesUpdateProfileProducts$Params } from '../../../swagger/fn/organization-profiles/organization-profiles-update-profile-products';
import { apiMarketOrganizationProfileProductsDtoAdapter } from '../../adapters/models/api-market-organization-profile-products-dto.adapter';

// @ts-ignore
export interface OrganizationProfilesUpdateProfileProductsParams {
  body?: MarketOrganizationProfileProducts;
}

export function organizationProfilesUpdateProfileProductsAdapter(params?: OrganizationProfilesUpdateProfileProductsParams): OrganizationProfilesUpdateProfileProducts$Params {
  if (!params) {
    return {} as OrganizationProfilesUpdateProfileProducts$Params;
  }
  return {
      body: apiMarketOrganizationProfileProductsDtoAdapter(params.body),
  };
}

import { MarketOrganizationProfileAppearance } from '../../models/market-organization-profile-appearance.interface';
import { OrganizationProfilesUpdateProfileAppearance$Params } from '../../../swagger/fn/organization-profiles/organization-profiles-update-profile-appearance';
import { apiMarketOrganizationProfileAppearanceDtoAdapter } from '../../adapters/models/api-market-organization-profile-appearance-dto.adapter';

// @ts-ignore
export interface OrganizationProfilesUpdateProfileAppearanceParams {
  body?: MarketOrganizationProfileAppearance;
}

export function organizationProfilesUpdateProfileAppearanceAdapter(params?: OrganizationProfilesUpdateProfileAppearanceParams): OrganizationProfilesUpdateProfileAppearance$Params {
  if (!params) {
    return {} as OrganizationProfilesUpdateProfileAppearance$Params;
  }
  return {
      body: apiMarketOrganizationProfileAppearanceDtoAdapter(params.body),
  };
}

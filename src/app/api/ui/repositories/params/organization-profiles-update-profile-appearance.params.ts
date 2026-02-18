import { MarketOrganizationProfileAppearance } from '../../models/market-organization-profile-appearance.interface';
import { OrganizationProfilesUpdateProfileAppearance$Params } from '../../../swagger/fn/organization-profiles/organization-profiles-update-profile-appearance';
import { adaptApiMarketOrganizationProfileAppearanceDto } from '../../adapters/toDto/api-market-organization-profile-appearance-dto.adapter';

export interface OrganizationProfilesUpdateProfileAppearanceParams {
  body?: MarketOrganizationProfileAppearance;
}

export const organizationProfilesUpdateProfileAppearanceParamsAdapter = {
  adapt(params?: OrganizationProfilesUpdateProfileAppearanceParams): OrganizationProfilesUpdateProfileAppearance$Params {
    if (!params) {
      return {} as OrganizationProfilesUpdateProfileAppearance$Params;
    }
    return {
      body: adaptApiMarketOrganizationProfileAppearanceDto(params.body),
    };
  }
};

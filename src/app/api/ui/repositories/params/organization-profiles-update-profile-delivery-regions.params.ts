import { OrganizationProfilesUpdateProfileDeliveryRegions$Params } from '../../../swagger/fn/organization-profiles/organization-profiles-update-profile-delivery-regions';

export interface OrganizationProfilesUpdateProfileDeliveryRegionsParams {
  body?: string[];
}

export const organizationProfilesUpdateProfileDeliveryRegionsParamsAdapter = {
  adapt(params?: OrganizationProfilesUpdateProfileDeliveryRegionsParams): OrganizationProfilesUpdateProfileDeliveryRegions$Params {
    if (!params) {
      return {} as OrganizationProfilesUpdateProfileDeliveryRegions$Params;
    }
    return {
      body: params.body,
    };
  }
};

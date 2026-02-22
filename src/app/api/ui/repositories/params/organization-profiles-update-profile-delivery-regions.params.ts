import { OrganizationProfilesUpdateProfileDeliveryRegions$Params } from '../../../swagger/fn/organization-profiles/organization-profiles-update-profile-delivery-regions';

// @ts-ignore
export interface OrganizationProfilesUpdateProfileDeliveryRegionsParams {
  body?: string[];
}

export function organizationProfilesUpdateProfileDeliveryRegionsAdapter(params?: OrganizationProfilesUpdateProfileDeliveryRegionsParams): OrganizationProfilesUpdateProfileDeliveryRegions$Params {
  if (!params) {
    return {} as OrganizationProfilesUpdateProfileDeliveryRegions$Params;
  }
  return {
      body: params.body,
  };
}

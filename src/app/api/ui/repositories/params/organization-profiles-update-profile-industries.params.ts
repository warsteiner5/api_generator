import { OrganizationProfilesUpdateProfileIndustries$Params } from '../../../swagger/fn/organization-profiles/organization-profiles-update-profile-industries';

// @ts-ignore
export interface OrganizationProfilesUpdateProfileIndustriesParams {
  body?: string[];
}

export function organizationProfilesUpdateProfileIndustriesAdapter(params?: OrganizationProfilesUpdateProfileIndustriesParams): OrganizationProfilesUpdateProfileIndustries$Params {
  if (!params) {
    return {} as OrganizationProfilesUpdateProfileIndustries$Params;
  }
  return {
      body: params.body,
  };
}

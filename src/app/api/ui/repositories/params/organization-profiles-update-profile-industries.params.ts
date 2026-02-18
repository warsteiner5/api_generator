import { OrganizationProfilesUpdateProfileIndustries$Params } from '../../../swagger/fn/organization-profiles/organization-profiles-update-profile-industries';

export interface OrganizationProfilesUpdateProfileIndustriesParams {
  body?: string[];
}

export const organizationProfilesUpdateProfileIndustriesParamsAdapter = {
  adapt(params?: OrganizationProfilesUpdateProfileIndustriesParams): OrganizationProfilesUpdateProfileIndustries$Params {
    if (!params) {
      return {} as OrganizationProfilesUpdateProfileIndustries$Params;
    }
    return {
      body: params.body,
    };
  }
};

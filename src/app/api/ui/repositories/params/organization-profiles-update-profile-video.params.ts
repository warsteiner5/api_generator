import { OrganizationProfilesUpdateProfileVideo$Params } from '../../../swagger/fn/organization-profiles/organization-profiles-update-profile-video';

export interface OrganizationProfilesUpdateProfileVideoParams {
  body?: string[];
}

export const organizationProfilesUpdateProfileVideoParamsAdapter = {
  adapt(params?: OrganizationProfilesUpdateProfileVideoParams): OrganizationProfilesUpdateProfileVideo$Params {
    if (!params) {
      return {} as OrganizationProfilesUpdateProfileVideo$Params;
    }
    return {
      body: params.body,
    };
  }
};

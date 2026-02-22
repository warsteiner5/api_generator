import { OrganizationProfilesUpdateProfileVideo$Params } from '../../../swagger/fn/organization-profiles/organization-profiles-update-profile-video';

// @ts-ignore
export interface OrganizationProfilesUpdateProfileVideoParams {
  body?: string[];
}

export function organizationProfilesUpdateProfileVideoAdapter(params?: OrganizationProfilesUpdateProfileVideoParams): OrganizationProfilesUpdateProfileVideo$Params {
  if (!params) {
    return {} as OrganizationProfilesUpdateProfileVideo$Params;
  }
  return {
      body: params.body,
  };
}

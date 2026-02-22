import { OrganizationProfilesUpdateProfileGallery$Params } from '../../../swagger/fn/organization-profiles/organization-profiles-update-profile-gallery';

// @ts-ignore
export interface OrganizationProfilesUpdateProfileGalleryParams {
  body?: string[];
}

export function organizationProfilesUpdateProfileGalleryAdapter(params?: OrganizationProfilesUpdateProfileGalleryParams): OrganizationProfilesUpdateProfileGallery$Params {
  if (!params) {
    return {} as OrganizationProfilesUpdateProfileGallery$Params;
  }
  return {
      body: params.body,
  };
}

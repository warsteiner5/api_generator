import { OrganizationProfilesUpdateProfileGallery$Params } from '../../../swagger/fn/organization-profiles/organization-profiles-update-profile-gallery';

export interface OrganizationProfilesUpdateProfileGalleryParams {
  body?: string[];
}

export const organizationProfilesUpdateProfileGalleryParamsAdapter = {
  adapt(params?: OrganizationProfilesUpdateProfileGalleryParams): OrganizationProfilesUpdateProfileGallery$Params {
    if (!params) {
      return {} as OrganizationProfilesUpdateProfileGallery$Params;
    }
    return {
      body: params.body,
    };
  }
};

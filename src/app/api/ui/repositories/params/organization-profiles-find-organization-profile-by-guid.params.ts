import { OrganizationProfilesFindOrganizationProfileByGuid$Params } from '../../../swagger/fn/organization-profiles/organization-profiles-find-organization-profile-by-guid';

export interface OrganizationProfilesFindOrganizationProfileByGuidParams {
}

export const organizationProfilesFindOrganizationProfileByGuidParamsAdapter = {
  adapt(params?: OrganizationProfilesFindOrganizationProfileByGuidParams): OrganizationProfilesFindOrganizationProfileByGuid$Params {
    if (!params) {
      return {} as OrganizationProfilesFindOrganizationProfileByGuid$Params;
    }
    return {
    };
  }
};

import { OrganizationsFindOrganizationInfoByGuid$Params } from '../../../swagger/fn/organizations/organizations-find-organization-info-by-guid';

export interface OrganizationsFindOrganizationInfoByGuidParams {
  guid: string;
}

export const organizationsFindOrganizationInfoByGuidParamsAdapter = {
  adapt(params?: OrganizationsFindOrganizationInfoByGuidParams): OrganizationsFindOrganizationInfoByGuid$Params {
    if (!params) {
      return {} as OrganizationsFindOrganizationInfoByGuid$Params;
    }
    return {
      guid: params.guid,
    };
  }
};

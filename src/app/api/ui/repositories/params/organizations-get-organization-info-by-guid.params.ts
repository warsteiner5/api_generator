import { OrganizationsGetOrganizationInfoByGuid$Params } from '../../../swagger/fn/organizations/organizations-get-organization-info-by-guid';

export interface OrganizationsGetOrganizationInfoByGuidParams {
  guid: string;
}

export const organizationsGetOrganizationInfoByGuidParamsAdapter = {
  adapt(params?: OrganizationsGetOrganizationInfoByGuidParams): OrganizationsGetOrganizationInfoByGuid$Params {
    if (!params) {
      return {} as OrganizationsGetOrganizationInfoByGuid$Params;
    }
    return {
      guid: params.guid,
    };
  }
};

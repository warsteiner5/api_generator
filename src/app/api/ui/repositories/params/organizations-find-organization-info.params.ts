import { OrganizationsFindOrganizationInfo$Params } from '../../../swagger/fn/organizations/organizations-find-organization-info';

export interface OrganizationsFindOrganizationInfoParams {
}

export const organizationsFindOrganizationInfoParamsAdapter = {
  adapt(params?: OrganizationsFindOrganizationInfoParams): OrganizationsFindOrganizationInfo$Params {
    if (!params) {
      return {} as OrganizationsFindOrganizationInfo$Params;
    }
    return {
    };
  }
};

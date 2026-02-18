import { OrganizationsGetOrganizationShortInfo$Params } from '../../../swagger/fn/organizations/organizations-get-organization-short-info';

export interface OrganizationsGetOrganizationShortInfoParams {
}

export const organizationsGetOrganizationShortInfoParamsAdapter = {
  adapt(params?: OrganizationsGetOrganizationShortInfoParams): OrganizationsGetOrganizationShortInfo$Params {
    if (!params) {
      return {} as OrganizationsGetOrganizationShortInfo$Params;
    }
    return {
    };
  }
};

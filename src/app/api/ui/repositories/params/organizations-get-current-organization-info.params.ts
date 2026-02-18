import { OrganizationsGetCurrentOrganizationInfo$Params } from '../../../swagger/fn/organizations/organizations-get-current-organization-info';

export interface OrganizationsGetCurrentOrganizationInfoParams {
}

export const organizationsGetCurrentOrganizationInfoParamsAdapter = {
  adapt(params?: OrganizationsGetCurrentOrganizationInfoParams): OrganizationsGetCurrentOrganizationInfo$Params {
    if (!params) {
      return {} as OrganizationsGetCurrentOrganizationInfo$Params;
    }
    return {
    };
  }
};

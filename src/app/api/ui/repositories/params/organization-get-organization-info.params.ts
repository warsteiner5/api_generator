import { OrganizationGetOrganizationInfo$Params } from '../../../swagger/fn/organization/organization-get-organization-info';

export interface OrganizationGetOrganizationInfoParams {
}

export const organizationGetOrganizationInfoParamsAdapter = {
  adapt(params?: OrganizationGetOrganizationInfoParams): OrganizationGetOrganizationInfo$Params {
    if (!params) {
      return {} as OrganizationGetOrganizationInfo$Params;
    }
    return {
    };
  }
};

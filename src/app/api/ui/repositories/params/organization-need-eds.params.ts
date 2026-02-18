import { OrganizationNeedEds$Params } from '../../../swagger/fn/organization/organization-need-eds';

export interface OrganizationNeedEdsParams {
}

export const organizationNeedEdsParamsAdapter = {
  adapt(params?: OrganizationNeedEdsParams): OrganizationNeedEds$Params {
    if (!params) {
      return {} as OrganizationNeedEds$Params;
    }
    return {
    };
  }
};

import { OrganizationCheckCurrentUserEds$Params } from '../../../swagger/fn/organization/organization-check-current-user-eds';

export interface OrganizationCheckCurrentUserEdsParams {
}

export const organizationCheckCurrentUserEdsParamsAdapter = {
  adapt(params?: OrganizationCheckCurrentUserEdsParams): OrganizationCheckCurrentUserEds$Params {
    if (!params) {
      return {} as OrganizationCheckCurrentUserEds$Params;
    }
    return {
    };
  }
};

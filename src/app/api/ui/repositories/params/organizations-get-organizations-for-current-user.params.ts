import { OrganizationsGetOrganizationsForCurrentUser$Params } from '../../../swagger/fn/organizations/organizations-get-organizations-for-current-user';

export interface OrganizationsGetOrganizationsForCurrentUserParams {
}

export const organizationsGetOrganizationsForCurrentUserParamsAdapter = {
  adapt(params?: OrganizationsGetOrganizationsForCurrentUserParams): OrganizationsGetOrganizationsForCurrentUser$Params {
    if (!params) {
      return {} as OrganizationsGetOrganizationsForCurrentUser$Params;
    }
    return {
    };
  }
};

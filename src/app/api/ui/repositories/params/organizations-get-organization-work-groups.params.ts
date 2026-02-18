import { OrganizationsGetOrganizationWorkGroups$Params } from '../../../swagger/fn/organizations/organizations-get-organization-work-groups';

export interface OrganizationsGetOrganizationWorkGroupsParams {
}

export const organizationsGetOrganizationWorkGroupsParamsAdapter = {
  adapt(params?: OrganizationsGetOrganizationWorkGroupsParams): OrganizationsGetOrganizationWorkGroups$Params {
    if (!params) {
      return {} as OrganizationsGetOrganizationWorkGroups$Params;
    }
    return {
    };
  }
};

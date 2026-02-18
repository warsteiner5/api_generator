import { OrganizationsGetForeignOrganizations$Params } from '../../../swagger/fn/organizations/organizations-get-foreign-organizations';

export interface OrganizationsGetForeignOrganizationsParams {
  body?: string[];
}

export const organizationsGetForeignOrganizationsParamsAdapter = {
  adapt(params?: OrganizationsGetForeignOrganizationsParams): OrganizationsGetForeignOrganizations$Params {
    if (!params) {
      return {} as OrganizationsGetForeignOrganizations$Params;
    }
    return {
      body: params.body,
    };
  }
};

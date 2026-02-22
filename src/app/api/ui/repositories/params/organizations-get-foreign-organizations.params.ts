import { OrganizationsGetForeignOrganizations$Params } from '../../../swagger/fn/organizations/organizations-get-foreign-organizations';

// @ts-ignore
export interface OrganizationsGetForeignOrganizationsParams {
  body?: string[];
}

export function organizationsGetForeignOrganizationsAdapter(params?: OrganizationsGetForeignOrganizationsParams): OrganizationsGetForeignOrganizations$Params {
  if (!params) {
    return {} as OrganizationsGetForeignOrganizations$Params;
  }
  return {
      body: params.body,
  };
}

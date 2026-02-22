import { OrganizationFilterAlt } from '../../models/organization-filter-alt.interface';
import { OrganizationsGetOrganizationsByFilter$Params } from '../../../swagger/fn/organizations/organizations-get-organizations-by-filter';
import { apiOrganizationFilterAltDtoAdapter } from '../../adapters/models/api-organization-filter.adapter';

// @ts-ignore
export interface OrganizationsGetOrganizationsByFilterParams {
  body?: OrganizationFilterAlt;
}

export function organizationsGetOrganizationsByFilterAdapter(params?: OrganizationsGetOrganizationsByFilterParams): OrganizationsGetOrganizationsByFilter$Params {
  if (!params) {
    return {} as OrganizationsGetOrganizationsByFilter$Params;
  }
  return {
      body: apiOrganizationFilterAltDtoAdapter(params.body),
  };
}

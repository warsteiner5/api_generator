import { OrganizationFilterAlt } from '../../models/organization-filter-alt.interface';
import { OrganizationsGetOrganizationsByFilter$Params } from '../../../swagger/fn/organizations/organizations-get-organizations-by-filter';
import { adaptApiOrganizationFilterAltDto } from '../../adapters/toDto/api-organization-filter.adapter';

export interface OrganizationsGetOrganizationsByFilterParams {
  body?: OrganizationFilterAlt;
}

export const organizationsGetOrganizationsByFilterParamsAdapter = {
  adapt(params?: OrganizationsGetOrganizationsByFilterParams): OrganizationsGetOrganizationsByFilter$Params {
    if (!params) {
      return {} as OrganizationsGetOrganizationsByFilter$Params;
    }
    return {
      body: adaptApiOrganizationFilterAltDto(params.body),
    };
  }
};

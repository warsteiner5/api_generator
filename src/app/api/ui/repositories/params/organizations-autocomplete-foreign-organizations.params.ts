import { AutocompleteForeignOrganizationsRequestAlt } from '../../models/autocomplete-foreign-organizations-request-alt.interface';
import { OrganizationsAutocompleteForeignOrganizations$Params } from '../../../swagger/fn/organizations/organizations-autocomplete-foreign-organizations';
import { apiAutocompleteForeignOrganizationsRequestAltDtoAdapter } from '../../adapters/models/api-autocomplete-foreign-organizations-request.adapter';

// @ts-ignore
export interface OrganizationsAutocompleteForeignOrganizationsParams {
  body?: AutocompleteForeignOrganizationsRequestAlt;
}

export function organizationsAutocompleteForeignOrganizationsAdapter(params?: OrganizationsAutocompleteForeignOrganizationsParams): OrganizationsAutocompleteForeignOrganizations$Params {
  if (!params) {
    return {} as OrganizationsAutocompleteForeignOrganizations$Params;
  }
  return {
      body: apiAutocompleteForeignOrganizationsRequestAltDtoAdapter(params.body),
  };
}

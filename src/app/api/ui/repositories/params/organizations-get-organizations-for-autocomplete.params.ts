import { OrganizationForAutocompleteFilterAlt } from '../../models/organization-for-autocomplete-filter-alt.interface';
import { OrganizationsGetOrganizationsForAutocomplete$Params } from '../../../swagger/fn/organizations/organizations-get-organizations-for-autocomplete';
import { apiOrganizationForAutocompleteFilterAltDtoAdapter } from '../../adapters/models/api-organization-for-autocomplete-filter.adapter';

// @ts-ignore
export interface OrganizationsGetOrganizationsForAutocompleteParams {
  body?: OrganizationForAutocompleteFilterAlt;
}

export function organizationsGetOrganizationsForAutocompleteAdapter(params?: OrganizationsGetOrganizationsForAutocompleteParams): OrganizationsGetOrganizationsForAutocomplete$Params {
  if (!params) {
    return {} as OrganizationsGetOrganizationsForAutocomplete$Params;
  }
  return {
      body: apiOrganizationForAutocompleteFilterAltDtoAdapter(params.body),
  };
}

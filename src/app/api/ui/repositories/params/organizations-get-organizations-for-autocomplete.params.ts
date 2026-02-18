import { OrganizationForAutocompleteFilterAlt } from '../../models/organization-for-autocomplete-filter-alt.interface';
import { OrganizationsGetOrganizationsForAutocomplete$Params } from '../../../swagger/fn/organizations/organizations-get-organizations-for-autocomplete';
import { adaptApiOrganizationForAutocompleteFilterAltDto } from '../../adapters/toDto/api-organization-for-autocomplete-filter.adapter';

export interface OrganizationsGetOrganizationsForAutocompleteParams {
  body?: OrganizationForAutocompleteFilterAlt;
}

export const organizationsGetOrganizationsForAutocompleteParamsAdapter = {
  adapt(params?: OrganizationsGetOrganizationsForAutocompleteParams): OrganizationsGetOrganizationsForAutocomplete$Params {
    if (!params) {
      return {} as OrganizationsGetOrganizationsForAutocomplete$Params;
    }
    return {
      body: adaptApiOrganizationForAutocompleteFilterAltDto(params.body),
    };
  }
};

import { CompanyCatalogGetOrganizationsForAutocomplete$Params } from '../../../swagger/fn/company-catalog/company-catalog-get-organizations-for-autocomplete';
import { OrganizationForAutocompleteFilterAlt } from '../../models/organization-for-autocomplete-filter-alt.interface';
import { apiOrganizationForAutocompleteFilterAltDtoAdapter } from '../../adapters/models/api-organization-for-autocomplete-filter.adapter';

// @ts-ignore
export interface CompanyCatalogGetOrganizationsForAutocompleteParams {
  body?: OrganizationForAutocompleteFilterAlt;
}

export function companyCatalogGetOrganizationsForAutocompleteAdapter(params?: CompanyCatalogGetOrganizationsForAutocompleteParams): CompanyCatalogGetOrganizationsForAutocomplete$Params {
  if (!params) {
    return {} as CompanyCatalogGetOrganizationsForAutocomplete$Params;
  }
  return {
      body: apiOrganizationForAutocompleteFilterAltDtoAdapter(params.body),
  };
}

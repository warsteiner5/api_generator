import { CompanyCatalogGetOrganizationsForAutocomplete$Params } from '../../../swagger/fn/company-catalog/company-catalog-get-organizations-for-autocomplete';
import { OrganizationForAutocompleteFilterAlt } from '../../models/organization-for-autocomplete-filter-alt.interface';
import { adaptApiOrganizationForAutocompleteFilterAltDto } from '../../adapters/toDto/api-organization-for-autocomplete-filter.adapter';

export interface CompanyCatalogGetOrganizationsForAutocompleteParams {
  body?: OrganizationForAutocompleteFilterAlt;
}

export const companyCatalogGetOrganizationsForAutocompleteParamsAdapter = {
  adapt(params?: CompanyCatalogGetOrganizationsForAutocompleteParams): CompanyCatalogGetOrganizationsForAutocomplete$Params {
    if (!params) {
      return {} as CompanyCatalogGetOrganizationsForAutocomplete$Params;
    }
    return {
      body: adaptApiOrganizationForAutocompleteFilterAltDto(params.body),
    };
  }
};

import { ApiOrganizationForAutocompleteFilterAltDto } from '../../../swagger/models/api-organization-for-autocomplete-filter';
import { OrganizationForAutocompleteFilterAlt } from '../../models/organization-for-autocomplete-filter-alt.interface';
import { baseFilterAltAdapter } from './base-filter-alt.adapter';

export const organizationForAutocompleteFilterAltAdapter = (source?: ApiOrganizationForAutocompleteFilterAltDto | null): OrganizationForAutocompleteFilterAlt => {
  return {
    ...baseFilterAltAdapter(source as unknown as Parameters<typeof baseFilterAltAdapter>[0]),
    isCustomer: source?.IsCustomer,
    isSupplier: source?.IsSupplier,
    inn: source?.Inn,
    name: source?.Name,
    kladr: source?.Kladr,
  };
}

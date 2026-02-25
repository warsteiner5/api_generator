import { OrganizationForAutocompleteFilterAlt } from '../../models/organization-for-autocomplete-filter-alt.interface';
import { ApiOrganizationForAutocompleteFilterAltDto } from '../../../swagger/models/api-organization-for-autocomplete-filter';
import { apiBaseFilterAltDtoAdapter } from './api-base-filter.adapter';

export const apiOrganizationForAutocompleteFilterAltDtoAdapter = (source?: OrganizationForAutocompleteFilterAlt | null): ApiOrganizationForAutocompleteFilterAltDto => {
  return {
    ...apiBaseFilterAltDtoAdapter(source as unknown as Parameters<typeof apiBaseFilterAltDtoAdapter>[0]),
    IsCustomer: source?.isCustomer,
    IsSupplier: source?.isSupplier,
    Inn: source?.inn,
    Name: source?.name,
    Kladr: source?.kladr,
  };
}

import { ApiOrganizationForAutocompleteFilterAltDto } from '../../../swagger/models/api-organization-for-autocomplete-filter';
import { OrganizationForAutocompleteFilterAlt } from '../../models/organization-for-autocomplete-filter-alt.interface';

export function adaptOrganizationForAutocompleteFilterAltToUI(source?: ApiOrganizationForAutocompleteFilterAltDto | null): OrganizationForAutocompleteFilterAlt {
  return (source ?? {}) as OrganizationForAutocompleteFilterAlt;
}

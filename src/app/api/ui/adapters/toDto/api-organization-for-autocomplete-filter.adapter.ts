import { OrganizationForAutocompleteFilterAlt } from '../../models/organization-for-autocomplete-filter-alt.interface';
import { ApiOrganizationForAutocompleteFilterAltDto } from '../../../swagger/models/api-organization-for-autocomplete-filter';

export function adaptApiOrganizationForAutocompleteFilterAltDto(source?: OrganizationForAutocompleteFilterAlt | null): ApiOrganizationForAutocompleteFilterAltDto {
  return (source ?? {}) as ApiOrganizationForAutocompleteFilterAltDto;
}

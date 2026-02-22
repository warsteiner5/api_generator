import { ApiAutocompleteForeignOrganizationsRequestAltDto } from '../../../swagger/models/api-autocomplete-foreign-organizations-request';
import { AutocompleteForeignOrganizationsRequestAlt } from '../../models/autocomplete-foreign-organizations-request-alt.interface';
import { sourceTypeAltEnumAdapter } from '../enums/source-type-alt-enum.adapter';

export const autocompleteForeignOrganizationsRequestAltAdapter = (source?: ApiAutocompleteForeignOrganizationsRequestAltDto | null): AutocompleteForeignOrganizationsRequestAlt => {
  return {
    itemsPerPage: source?.ItemsPerPage,
    page: source?.Page,
    query: source?.Query,
    source: source?.Source === null ? undefined : sourceTypeAltEnumAdapter(source?.Source),
  };
}

import { ApiAutocompleteForeignOrganizationsRequestAltDto } from '../../../swagger/models/api-autocomplete-foreign-organizations-request';
import { AutocompleteForeignOrganizationsRequestAlt } from '../../models/autocomplete-foreign-organizations-request-alt.interface';
import { adaptSourceTypeAltEnumToUI } from './source-type-alt-enum.adapter';

export function adaptAutocompleteForeignOrganizationsRequestAltToUI(source?: ApiAutocompleteForeignOrganizationsRequestAltDto | null): AutocompleteForeignOrganizationsRequestAlt {
  return {
    itemsPerPage: source?.ItemsPerPage ?? 0,
    page: source?.Page ?? 0,
    query: source?.Query ?? '',
    source: adaptSourceTypeAltEnumToUI(source?.Source),
  };
}

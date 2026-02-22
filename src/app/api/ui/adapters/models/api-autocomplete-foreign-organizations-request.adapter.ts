import { AutocompleteForeignOrganizationsRequestAlt } from '../../models/autocomplete-foreign-organizations-request-alt.interface';
import { ApiAutocompleteForeignOrganizationsRequestAltDto } from '../../../swagger/models/api-autocomplete-foreign-organizations-request';
import { apiSourceTypeAltEnumAdapter } from '../enums/api-source-type.adapter';

export const apiAutocompleteForeignOrganizationsRequestAltDtoAdapter = (source?: AutocompleteForeignOrganizationsRequestAlt | null): ApiAutocompleteForeignOrganizationsRequestAltDto => {
  return {
    ItemsPerPage: source?.itemsPerPage,
    Page: source?.page,
    Query: source?.query,
    Source: source?.source === null ? undefined : apiSourceTypeAltEnumAdapter(source?.source),
  };
}

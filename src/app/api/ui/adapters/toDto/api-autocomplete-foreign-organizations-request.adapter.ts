import { AutocompleteForeignOrganizationsRequestAlt } from '../../models/autocomplete-foreign-organizations-request-alt.interface';
import { ApiAutocompleteForeignOrganizationsRequestAltDto } from '../../../swagger/models/api-autocomplete-foreign-organizations-request';
import { adaptApiSourceTypeAltEnum } from './api-source-type.adapter';

export function adaptApiAutocompleteForeignOrganizationsRequestAltDto(source?: AutocompleteForeignOrganizationsRequestAlt | null): ApiAutocompleteForeignOrganizationsRequestAltDto {
  return {
    ItemsPerPage: source?.itemsPerPage,
    Page: source?.page,
    Query: source?.query,
    Source: adaptApiSourceTypeAltEnum(source?.source),
  };
}

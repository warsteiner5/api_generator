import { ApiPaginationResultOfOrganizationForAutocompleteDto } from '../../../swagger/models/api-pagination-result-of-organization-for-autocomplete-dto';
import { PaginationResultOfOrganizationForAutocomplete } from '../../models/pagination-result-of-organization-for-autocomplete.interface';
import { organizationForAutocompleteAdapter } from './organization-for-autocomplete.adapter';

export const paginationResultOfOrganizationForAutocompleteAdapter = (source?: ApiPaginationResultOfOrganizationForAutocompleteDto | null): PaginationResultOfOrganizationForAutocomplete => {
  return {
    currentPage: source?.currentPage,
    infos: source?.infos?.map((item) => organizationForAutocompleteAdapter(item)),
    totalPages: source?.totalPages,
    totalRecords: source?.totalRecords,
  };
}

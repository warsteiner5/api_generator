import { PaginationResultOfOrganizationForAutocomplete } from '../../models/pagination-result-of-organization-for-autocomplete.interface';
import { ApiPaginationResultOfOrganizationForAutocompleteDto } from '../../../swagger/models/api-pagination-result-of-organization-for-autocomplete-dto';
import { apiOrganizationForAutocompleteDtoAdapter } from './api-organization-for-autocomplete-dto.adapter';

export const apiPaginationResultOfOrganizationForAutocompleteDtoAdapter = (source?: PaginationResultOfOrganizationForAutocomplete | null): ApiPaginationResultOfOrganizationForAutocompleteDto => {
  return {
    currentPage: source?.currentPage,
    infos: source?.infos?.map((item) => apiOrganizationForAutocompleteDtoAdapter(item)),
    totalPages: source?.totalPages,
    totalRecords: source?.totalRecords,
  };
}

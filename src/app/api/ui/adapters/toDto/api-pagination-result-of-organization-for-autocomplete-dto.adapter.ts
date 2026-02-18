import { PaginationResultOfOrganizationForAutocomplete } from '../../models/pagination-result-of-organization-for-autocomplete.interface';
import { ApiPaginationResultOfOrganizationForAutocompleteDto } from '../../../swagger/models/api-pagination-result-of-organization-for-autocomplete-dto';
import { adaptApiOrganizationForAutocompleteDto } from './api-organization-for-autocomplete-dto.adapter';

export function adaptApiPaginationResultOfOrganizationForAutocompleteDto(source?: PaginationResultOfOrganizationForAutocomplete | null): ApiPaginationResultOfOrganizationForAutocompleteDto {
  return {
    currentPage: source?.currentPage,
    infos: (source?.infos ?? []).map((item) => adaptApiOrganizationForAutocompleteDto(item)),
    totalPages: source?.totalPages,
    totalRecords: source?.totalRecords,
  };
}

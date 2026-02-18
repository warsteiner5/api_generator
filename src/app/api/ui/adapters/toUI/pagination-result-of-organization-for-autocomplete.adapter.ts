import { ApiPaginationResultOfOrganizationForAutocompleteDto } from '../../../swagger/models/api-pagination-result-of-organization-for-autocomplete-dto';
import { PaginationResultOfOrganizationForAutocomplete } from '../../models/pagination-result-of-organization-for-autocomplete.interface';
import { adaptOrganizationForAutocompleteToUI } from './organization-for-autocomplete.adapter';

export function adaptPaginationResultOfOrganizationForAutocompleteToUI(source?: ApiPaginationResultOfOrganizationForAutocompleteDto | null): PaginationResultOfOrganizationForAutocomplete {
  return {
    currentPage: source?.currentPage ?? 0,
    infos: (source?.infos ?? []).map((item) => adaptOrganizationForAutocompleteToUI(item)),
    totalPages: source?.totalPages ?? 0,
    totalRecords: source?.totalRecords ?? 0,
  };
}

/* tslint:disable */
/* eslint-disable */
import { ApiOrganizationForAutocompleteDto } from '../models/api-organization-for-autocomplete-dto';
export interface ApiPaginationResultOfOrganizationForAutocompleteDto {
  currentPage?: number;
  infos?: Array<ApiOrganizationForAutocompleteDto> | null;
  totalPages?: number;
  totalRecords?: number;
}

import { OrganizationForAutocomplete } from './organization-for-autocomplete.interface';

export interface PaginationResultOfOrganizationForAutocomplete {
  currentPage: number;
  infos: OrganizationForAutocomplete[];
  totalPages: number;
  totalRecords: number;
}

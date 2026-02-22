import { OrganizationForAutocomplete } from './organization-for-autocomplete.interface';

// @ts-ignore
export interface PaginationResultOfOrganizationForAutocomplete {
  currentPage: number;
  infos: OrganizationForAutocomplete[];
  totalPages: number;
  totalRecords: number;
}

import { OrganizationWithAddressShortInfo } from './organization-with-address-short-info.interface';

export interface MarketPaginationResultOfListOfOrganizationWithAddressShortInfo {
  currentPage: number;
  items: OrganizationWithAddressShortInfo[];
  total: number;
  totalPages: number;
}

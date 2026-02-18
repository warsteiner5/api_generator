import { OrganizationDocument } from './organization-document.interface';

export interface MarketPaginationResultOfListOfOrganizationDocument {
  currentPage: number;
  items: OrganizationDocument[];
  total: number;
  totalPages: number;
}

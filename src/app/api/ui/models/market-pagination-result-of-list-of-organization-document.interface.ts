import { OrganizationDocument } from './organization-document.interface';

// @ts-ignore
export interface MarketPaginationResultOfListOfOrganizationDocument {
  currentPage: number;
  items: OrganizationDocument[];
  total: number;
  totalPages: number;
}

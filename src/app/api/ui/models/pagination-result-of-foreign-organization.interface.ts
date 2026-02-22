import { ForeignOrganization } from './foreign-organization.interface';

// @ts-ignore
export interface PaginationResultOfForeignOrganization {
  currentPage: number;
  infos: ForeignOrganization[];
  totalPages: number;
  totalRecords: number;
}

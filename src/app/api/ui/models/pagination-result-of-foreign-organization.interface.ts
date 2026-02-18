import { ForeignOrganization } from './foreign-organization.interface';

export interface PaginationResultOfForeignOrganization {
  currentPage: number;
  infos: ForeignOrganization[];
  totalPages: number;
  totalRecords: number;
}

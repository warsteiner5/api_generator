import { ApiPaginationResultOfForeignOrganizationDto } from '../../../swagger/models/api-pagination-result-of-foreign-organization-dto';
import { PaginationResultOfForeignOrganization } from '../../models/pagination-result-of-foreign-organization.interface';
import { foreignOrganizationAdapter } from './foreign-organization.adapter';

export const paginationResultOfForeignOrganizationAdapter = (source?: ApiPaginationResultOfForeignOrganizationDto | null): PaginationResultOfForeignOrganization => {
  return {
    currentPage: source?.currentPage,
    infos: source?.infos?.map((item) => foreignOrganizationAdapter(item)),
    totalPages: source?.totalPages,
    totalRecords: source?.totalRecords,
  };
}

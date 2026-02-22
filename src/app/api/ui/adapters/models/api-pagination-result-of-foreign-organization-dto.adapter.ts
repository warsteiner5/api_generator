import { PaginationResultOfForeignOrganization } from '../../models/pagination-result-of-foreign-organization.interface';
import { ApiPaginationResultOfForeignOrganizationDto } from '../../../swagger/models/api-pagination-result-of-foreign-organization-dto';
import { apiForeignOrganizationDtoAdapter } from './api-foreign-organization-dto.adapter';

export const apiPaginationResultOfForeignOrganizationDtoAdapter = (source?: PaginationResultOfForeignOrganization | null): ApiPaginationResultOfForeignOrganizationDto => {
  return {
    currentPage: source?.currentPage,
    infos: source?.infos?.map((item) => apiForeignOrganizationDtoAdapter(item)),
    totalPages: source?.totalPages,
    totalRecords: source?.totalRecords,
  };
}

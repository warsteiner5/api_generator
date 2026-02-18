import { PaginationResultOfForeignOrganization } from '../../models/pagination-result-of-foreign-organization.interface';
import { ApiPaginationResultOfForeignOrganizationDto } from '../../../swagger/models/api-pagination-result-of-foreign-organization-dto';
import { adaptApiForeignOrganizationDto } from './api-foreign-organization-dto.adapter';

export function adaptApiPaginationResultOfForeignOrganizationDto(source?: PaginationResultOfForeignOrganization | null): ApiPaginationResultOfForeignOrganizationDto {
  return {
    currentPage: source?.currentPage,
    infos: (source?.infos ?? []).map((item) => adaptApiForeignOrganizationDto(item)),
    totalPages: source?.totalPages,
    totalRecords: source?.totalRecords,
  };
}

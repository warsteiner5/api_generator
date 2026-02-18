import { ApiPaginationResultOfForeignOrganizationDto } from '../../../swagger/models/api-pagination-result-of-foreign-organization-dto';
import { PaginationResultOfForeignOrganization } from '../../models/pagination-result-of-foreign-organization.interface';
import { adaptForeignOrganizationToUI } from './foreign-organization.adapter';

export function adaptPaginationResultOfForeignOrganizationToUI(source?: ApiPaginationResultOfForeignOrganizationDto | null): PaginationResultOfForeignOrganization {
  return {
    currentPage: source?.currentPage ?? 0,
    infos: (source?.infos ?? []).map((item) => adaptForeignOrganizationToUI(item)),
    totalPages: source?.totalPages ?? 0,
    totalRecords: source?.totalRecords ?? 0,
  };
}

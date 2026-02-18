/* tslint:disable */
/* eslint-disable */
import { ApiForeignOrganizationDto } from '../models/api-foreign-organization-dto';
export interface ApiPaginationResultOfForeignOrganizationDto {
  currentPage?: number;
  infos?: Array<ApiForeignOrganizationDto> | null;
  totalPages?: number;
  totalRecords?: number;
}

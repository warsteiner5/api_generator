/* tslint:disable */
/* eslint-disable */
import { ApiRoleItemResponseDto } from '../models/api-role-item-response-dto';
export interface ApiMarketPaginationResultOfListOfRoleItemResponseDto {
  currentPage?: number;
  items?: Array<ApiRoleItemResponseDto> | null;
  total?: number;
  totalPages?: number;
}

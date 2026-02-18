import { RoleItemResponse } from './role-item-response.interface';

export interface MarketPaginationResultOfListOfRoleItemResponse {
  currentPage: number;
  items: RoleItemResponse[];
  total: number;
  totalPages: number;
}

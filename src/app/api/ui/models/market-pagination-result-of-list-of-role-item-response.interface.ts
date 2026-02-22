import { RoleItemResponse } from './role-item-response.interface';

// @ts-ignore
export interface MarketPaginationResultOfListOfRoleItemResponse {
  currentPage: number;
  items: RoleItemResponse[];
  total: number;
  totalPages: number;
}

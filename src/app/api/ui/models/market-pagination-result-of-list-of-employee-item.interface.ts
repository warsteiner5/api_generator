import { EmployeeItem } from './employee-item.interface';

// @ts-ignore
export interface MarketPaginationResultOfListOfEmployeeItem {
  currentPage: number;
  items: EmployeeItem[];
  total: number;
  totalPages: number;
}

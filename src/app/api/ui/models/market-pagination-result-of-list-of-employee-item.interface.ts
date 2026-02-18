import { EmployeeItem } from './employee-item.interface';

export interface MarketPaginationResultOfListOfEmployeeItem {
  currentPage: number;
  items: EmployeeItem[];
  total: number;
  totalPages: number;
}

/* tslint:disable */
/* eslint-disable */
import { ApiEmployeeItemDto } from '../models/api-employee-item-dto';
export interface ApiMarketPaginationResultOfListOfEmployeeItemDto {
  currentPage?: number;
  items?: Array<ApiEmployeeItemDto> | null;
  total?: number;
  totalPages?: number;
}

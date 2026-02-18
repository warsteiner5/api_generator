/* tslint:disable */
/* eslint-disable */
import { ApiMarketBusinessOperationLogDto } from '../models/api-market-business-operation-log-dto';
export interface ApiMarketPaginationResultOfListOfMarketBusinessOperationLogDto {
  currentPage?: number;
  items?: Array<ApiMarketBusinessOperationLogDto> | null;
  total?: number;
  totalPages?: number;
}

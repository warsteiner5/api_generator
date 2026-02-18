/* tslint:disable */
/* eslint-disable */
import { ApiTransactionShortDto } from '../models/api-transaction-short-dto';
export interface ApiMarketPaginationResultOfListOfTransactionShortDto {
  currentPage?: number;
  items?: Array<ApiTransactionShortDto> | null;
  total?: number;
  totalPages?: number;
}

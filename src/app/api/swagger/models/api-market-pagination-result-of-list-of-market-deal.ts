/* tslint:disable */
/* eslint-disable */
import { ApiMarketDealAltDto } from '../models/api-market-deal';
export interface ApiMarketPaginationResultOfListOfMarketDealAltDto {
  currentPage?: number;
  items?: Array<ApiMarketDealAltDto> | null;
  total?: number;
  totalPages?: number;
}

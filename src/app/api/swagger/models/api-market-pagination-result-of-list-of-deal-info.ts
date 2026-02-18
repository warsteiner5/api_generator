/* tslint:disable */
/* eslint-disable */
import { ApiDealInfoAltDto } from '../models/api-deal-info';
export interface ApiMarketPaginationResultOfListOfDealInfoAltDto {
  currentPage?: number;
  items?: Array<ApiDealInfoAltDto> | null;
  total?: number;
  totalPages?: number;
}

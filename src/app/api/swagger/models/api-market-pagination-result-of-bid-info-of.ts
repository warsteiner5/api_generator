/* tslint:disable */
/* eslint-disable */
import { ApiBidInfoAltDto } from '../models/api-bid-info';
export interface ApiMarketPaginationResultOfBidInfoOfAltDto {
  currentPage?: number;
  items?: Array<ApiBidInfoAltDto> | null;
  total?: number;
  totalPages?: number;
}

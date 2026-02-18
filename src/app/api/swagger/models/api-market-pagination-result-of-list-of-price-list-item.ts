/* tslint:disable */
/* eslint-disable */
import { ApiPriceListItemAltDto } from '../models/api-price-list-item';
export interface ApiMarketPaginationResultOfListOfPriceListItemAltDto {
  currentPage?: number;
  items?: Array<ApiPriceListItemAltDto> | null;
  total?: number;
  totalPages?: number;
}

/* tslint:disable */
/* eslint-disable */
import { ApiMzPriceListDto } from '../models/api-mz-price-list-dto';
export interface ApiMarketPaginationResultOfListOfMzPriceListDto {
  currentPage?: number;
  items?: Array<ApiMzPriceListDto> | null;
  total?: number;
  totalPages?: number;
}

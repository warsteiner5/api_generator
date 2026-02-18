/* tslint:disable */
/* eslint-disable */
import { ApiAcceptedPriceListInfoDto } from '../models/api-accepted-price-list-info-dto';
export interface ApiMarketPaginationResultOfListOfAcceptedPriceListInfoDto {
  currentPage?: number;
  items?: Array<ApiAcceptedPriceListInfoDto> | null;
  total?: number;
  totalPages?: number;
}

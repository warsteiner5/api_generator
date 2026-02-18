/* tslint:disable */
/* eslint-disable */
import { ApiDealListItemDto } from '../models/api-deal-list-item-dto';
export interface ApiMarketPaginationResultOfListOfDealListItemDto {
  currentPage?: number;
  items?: Array<ApiDealListItemDto> | null;
  total?: number;
  totalPages?: number;
}

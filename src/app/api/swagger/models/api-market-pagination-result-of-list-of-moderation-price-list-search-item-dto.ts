/* tslint:disable */
/* eslint-disable */
import { ApiModerationPriceListSearchItemDto } from '../models/api-moderation-price-list-search-item-dto';
export interface ApiMarketPaginationResultOfListOfModerationPriceListSearchItemDto {
  currentPage?: number;
  items?: Array<ApiModerationPriceListSearchItemDto> | null;
  total?: number;
  totalPages?: number;
}

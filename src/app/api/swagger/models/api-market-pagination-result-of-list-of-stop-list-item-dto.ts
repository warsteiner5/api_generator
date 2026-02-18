/* tslint:disable */
/* eslint-disable */
import { ApiStopListItemDto } from '../models/api-stop-list-item-dto';
export interface ApiMarketPaginationResultOfListOfStopListItemDto {
  currentPage?: number;
  items?: Array<ApiStopListItemDto> | null;
  total?: number;
  totalPages?: number;
}

/* tslint:disable */
/* eslint-disable */
import { ApiMarketSearchResultDto } from '../models/api-market-search-result-dto';
export interface ApiMarketPaginationResultOfListOfMarketSearchResultDto {
  currentPage?: number;
  items?: Array<ApiMarketSearchResultDto> | null;
  total?: number;
  totalPages?: number;
}

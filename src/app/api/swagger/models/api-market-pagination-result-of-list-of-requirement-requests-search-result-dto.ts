/* tslint:disable */
/* eslint-disable */
import { ApiRequirementRequestsSearchResultDto } from '../models/api-requirement-requests-search-result-dto';
export interface ApiMarketPaginationResultOfListOfRequirementRequestsSearchResultDto {
  currentPage?: number;
  items?: Array<ApiRequirementRequestsSearchResultDto> | null;
  total?: number;
  totalPages?: number;
}

import { RequirementRequestsSearchResult } from './requirement-requests-search-result.interface';

export interface MarketPaginationResultOfListOfRequirementRequestsSearchResult {
  currentPage: number;
  items: RequirementRequestsSearchResult[];
  total: number;
  totalPages: number;
}

import { RequirementRequestsSearchResult } from './requirement-requests-search-result.interface';

// @ts-ignore
export interface MarketPaginationResultOfListOfRequirementRequestsSearchResult {
  currentPage: number;
  items: RequirementRequestsSearchResult[];
  total: number;
  totalPages: number;
}

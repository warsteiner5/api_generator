import { ApiMarketPaginationResultOfListOfRequirementRequestsSearchResultDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-requirement-requests-search-result-dto';
import { MarketPaginationResultOfListOfRequirementRequestsSearchResult } from '../../models/market-pagination-result-of-list-of-requirement-requests-search-result.interface';
import { adaptRequirementRequestsSearchResultToUI } from './requirement-requests-search-result.adapter';

export function adaptMarketPaginationResultOfListOfRequirementRequestsSearchResultToUI(source?: ApiMarketPaginationResultOfListOfRequirementRequestsSearchResultDto | null): MarketPaginationResultOfListOfRequirementRequestsSearchResult {
  return {
    currentPage: source?.currentPage ?? 0,
    items: (source?.items ?? []).map((item) => adaptRequirementRequestsSearchResultToUI(item)),
    total: source?.total ?? 0,
    totalPages: source?.totalPages ?? 0,
  };
}

import { ApiMarketPaginationResultOfListOfRequirementRequestsSearchResultDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-requirement-requests-search-result-dto';
import { MarketPaginationResultOfListOfRequirementRequestsSearchResult } from '../../models/market-pagination-result-of-list-of-requirement-requests-search-result.interface';
import { requirementRequestsSearchResultAdapter } from './requirement-requests-search-result.adapter';

export const marketPaginationResultOfListOfRequirementRequestsSearchResultAdapter = (source?: ApiMarketPaginationResultOfListOfRequirementRequestsSearchResultDto | null): MarketPaginationResultOfListOfRequirementRequestsSearchResult => {
  return {
    currentPage: source?.currentPage,
    items: source?.items?.map((item) => requirementRequestsSearchResultAdapter(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}

import { MarketPaginationResultOfListOfRequirementRequestsSearchResult } from '../../models/market-pagination-result-of-list-of-requirement-requests-search-result.interface';
import { ApiMarketPaginationResultOfListOfRequirementRequestsSearchResultDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-requirement-requests-search-result-dto';
import { apiRequirementRequestsSearchResultDtoAdapter } from './api-requirement-requests-search-result-dto.adapter';

export const apiMarketPaginationResultOfListOfRequirementRequestsSearchResultDtoAdapter = (source?: MarketPaginationResultOfListOfRequirementRequestsSearchResult | null): ApiMarketPaginationResultOfListOfRequirementRequestsSearchResultDto => {
  return {
    currentPage: source?.currentPage,
    items: source?.items?.map((item) => apiRequirementRequestsSearchResultDtoAdapter(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}

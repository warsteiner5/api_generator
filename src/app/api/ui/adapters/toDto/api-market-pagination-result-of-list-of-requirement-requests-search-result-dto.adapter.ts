import { MarketPaginationResultOfListOfRequirementRequestsSearchResult } from '../../models/market-pagination-result-of-list-of-requirement-requests-search-result.interface';
import { ApiMarketPaginationResultOfListOfRequirementRequestsSearchResultDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-requirement-requests-search-result-dto';
import { adaptApiRequirementRequestsSearchResultDto } from './api-requirement-requests-search-result-dto.adapter';

export function adaptApiMarketPaginationResultOfListOfRequirementRequestsSearchResultDto(source?: MarketPaginationResultOfListOfRequirementRequestsSearchResult | null): ApiMarketPaginationResultOfListOfRequirementRequestsSearchResultDto {
  return {
    currentPage: source?.currentPage,
    items: (source?.items ?? []).map((item) => adaptApiRequirementRequestsSearchResultDto(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}

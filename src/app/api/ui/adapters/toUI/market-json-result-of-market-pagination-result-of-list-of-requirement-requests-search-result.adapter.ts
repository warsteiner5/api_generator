import { ApiMarketJsonResultOfMarketPaginationResultOfListOfRequirementRequestsSearchResultDto } from '../../../swagger/models/api-market-json-result-of-market-pagination-result-of-list-of-requirement-requests-search-result-dto';
import { MarketJsonResultOfMarketPaginationResultOfListOfRequirementRequestsSearchResult } from '../../models/market-json-result-of-market-pagination-result-of-list-of-requirement-requests-search-result.interface';

export function adaptMarketJsonResultOfMarketPaginationResultOfListOfRequirementRequestsSearchResultToUI(source?: ApiMarketJsonResultOfMarketPaginationResultOfListOfRequirementRequestsSearchResultDto | null): MarketJsonResultOfMarketPaginationResultOfListOfRequirementRequestsSearchResult {
  return (source ?? {}) as MarketJsonResultOfMarketPaginationResultOfListOfRequirementRequestsSearchResult;
}

import { MarketJsonResultOfMarketPaginationResultOfListOfRequirementRequestsSearchResult } from '../../models/market-json-result-of-market-pagination-result-of-list-of-requirement-requests-search-result.interface';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfRequirementRequestsSearchResultDto } from '../../../swagger/models/api-market-json-result-of-market-pagination-result-of-list-of-requirement-requests-search-result-dto';

export function adaptApiMarketJsonResultOfMarketPaginationResultOfListOfRequirementRequestsSearchResultDto(source?: MarketJsonResultOfMarketPaginationResultOfListOfRequirementRequestsSearchResult | null): ApiMarketJsonResultOfMarketPaginationResultOfListOfRequirementRequestsSearchResultDto {
  return (source ?? {}) as ApiMarketJsonResultOfMarketPaginationResultOfListOfRequirementRequestsSearchResultDto;
}

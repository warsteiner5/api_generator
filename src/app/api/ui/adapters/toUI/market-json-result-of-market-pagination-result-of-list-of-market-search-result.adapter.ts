import { ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketSearchResultDto } from '../../../swagger/models/api-market-json-result-of-market-pagination-result-of-list-of-market-search-result-dto';
import { MarketJsonResultOfMarketPaginationResultOfListOfMarketSearchResult } from '../../models/market-json-result-of-market-pagination-result-of-list-of-market-search-result.interface';

export function adaptMarketJsonResultOfMarketPaginationResultOfListOfMarketSearchResultToUI(source?: ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketSearchResultDto | null): MarketJsonResultOfMarketPaginationResultOfListOfMarketSearchResult {
  return (source ?? {}) as MarketJsonResultOfMarketPaginationResultOfListOfMarketSearchResult;
}

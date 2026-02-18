import { ApiMarketPaginationResultOfListOfMarketSearchResultDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-market-search-result-dto';
import { MarketPaginationResultOfListOfMarketSearchResult } from '../../models/market-pagination-result-of-list-of-market-search-result.interface';
import { adaptMarketSearchResultToUI } from './market-search-result.adapter';

export function adaptMarketPaginationResultOfListOfMarketSearchResultToUI(source?: ApiMarketPaginationResultOfListOfMarketSearchResultDto | null): MarketPaginationResultOfListOfMarketSearchResult {
  return {
    currentPage: source?.currentPage ?? 0,
    items: (source?.items ?? []).map((item) => adaptMarketSearchResultToUI(item)),
    total: source?.total ?? 0,
    totalPages: source?.totalPages ?? 0,
  };
}

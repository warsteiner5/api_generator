import { ApiMarketPaginationResultOfListOfMarketSearchResultDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-market-search-result-dto';
import { MarketPaginationResultOfListOfMarketSearchResult } from '../../models/market-pagination-result-of-list-of-market-search-result.interface';
import { marketSearchResultAdapter } from './market-search-result.adapter';

export const marketPaginationResultOfListOfMarketSearchResultAdapter = (source?: ApiMarketPaginationResultOfListOfMarketSearchResultDto | null): MarketPaginationResultOfListOfMarketSearchResult => {
  return {
    currentPage: source?.currentPage,
    items: source?.items?.map((item) => marketSearchResultAdapter(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}

import { MarketPaginationResultOfListOfMarketSearchResult } from '../../models/market-pagination-result-of-list-of-market-search-result.interface';
import { ApiMarketPaginationResultOfListOfMarketSearchResultDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-market-search-result-dto';
import { apiMarketSearchResultDtoAdapter } from './api-market-search-result-dto.adapter';

export const apiMarketPaginationResultOfListOfMarketSearchResultDtoAdapter = (source?: MarketPaginationResultOfListOfMarketSearchResult | null): ApiMarketPaginationResultOfListOfMarketSearchResultDto => {
  return {
    currentPage: source?.currentPage,
    items: source?.items?.map((item) => apiMarketSearchResultDtoAdapter(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}

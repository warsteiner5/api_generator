import { MarketPaginationResultOfListOfMarketSearchResult } from '../../models/market-pagination-result-of-list-of-market-search-result.interface';
import { ApiMarketPaginationResultOfListOfMarketSearchResultDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-market-search-result-dto';
import { adaptApiMarketSearchResultDto } from './api-market-search-result-dto.adapter';

export function adaptApiMarketPaginationResultOfListOfMarketSearchResultDto(source?: MarketPaginationResultOfListOfMarketSearchResult | null): ApiMarketPaginationResultOfListOfMarketSearchResultDto {
  return {
    currentPage: source?.currentPage,
    items: (source?.items ?? []).map((item) => adaptApiMarketSearchResultDto(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}

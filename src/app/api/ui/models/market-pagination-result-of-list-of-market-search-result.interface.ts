import { MarketSearchResult } from './market-search-result.interface';

export interface MarketPaginationResultOfListOfMarketSearchResult {
  currentPage: number;
  items: MarketSearchResult[];
  total: number;
  totalPages: number;
}

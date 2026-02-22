import { MarketSearchResult } from './market-search-result.interface';

// @ts-ignore
export interface MarketPaginationResultOfListOfMarketSearchResult {
  currentPage: number;
  items: MarketSearchResult[];
  total: number;
  totalPages: number;
}

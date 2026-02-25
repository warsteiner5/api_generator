import { MarketPaginationResult } from './market-pagination-result.interface';
import { MarketSearchResult } from './market-search-result.interface';

// @ts-ignore
export type MarketPaginationResultOfListOfMarketSearchResult = MarketPaginationResult<MarketSearchResult[]>;

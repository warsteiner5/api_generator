import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { MarketPaginationResultOfListOfMarketSearchResult } from './market-pagination-result-of-list-of-market-search-result.interface';

export type MarketJsonResultOfMarketPaginationResultOfListOfMarketSearchResult = MarketJsonVoidResultAlt & { 'data'?: MarketPaginationResultOfListOfMarketSearchResult | null; };

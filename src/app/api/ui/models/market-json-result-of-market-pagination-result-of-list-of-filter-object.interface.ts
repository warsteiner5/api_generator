import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { MarketPaginationResultOfListOfFilterObjectAlt } from './market-pagination-result-of-list-of-filter-object-alt.interface';

export type MarketJsonResultOfMarketPaginationResultOfListOfFilterObject = MarketJsonVoidResultAlt & { 'data'?: MarketPaginationResultOfListOfFilterObjectAlt | null; };

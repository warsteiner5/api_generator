import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { MarketPaginationResultOfListOfTagItemAlt } from './market-pagination-result-of-list-of-tag-item-alt.interface';

export type MarketJsonResultOfMarketPaginationResultOfListOfTagItem = MarketJsonVoidResultAlt & { 'data'?: MarketPaginationResultOfListOfTagItemAlt | null; };

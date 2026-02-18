import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { MarketPaginationResultOfListOfFinDocument } from './market-pagination-result-of-list-of-fin-document.interface';

export type MarketJsonResultOfMarketPaginationResultOfListOfFinDocument = MarketJsonVoidResultAlt & { 'data'?: MarketPaginationResultOfListOfFinDocument | null; };

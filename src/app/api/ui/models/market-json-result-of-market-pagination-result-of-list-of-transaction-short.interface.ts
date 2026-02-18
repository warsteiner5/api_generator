import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { MarketPaginationResultOfListOfTransactionShort } from './market-pagination-result-of-list-of-transaction-short.interface';

export type MarketJsonResultOfMarketPaginationResultOfListOfTransactionShort = MarketJsonVoidResultAlt & { 'data'?: MarketPaginationResultOfListOfTransactionShort | null; };

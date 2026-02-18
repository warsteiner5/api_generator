import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { MarketPaginationResultOfListOfQuotationSessionItem } from './market-pagination-result-of-list-of-quotation-session-item.interface';

export type MarketJsonResultOfMarketPaginationResultOfListOfQuotationSessionItem = MarketJsonVoidResultAlt & { 'data'?: MarketPaginationResultOfListOfQuotationSessionItem | null; };

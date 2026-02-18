import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { MarketPaginationResultOfListOfPartner } from './market-pagination-result-of-list-of-partner.interface';

export type MarketJsonResultOfMarketPaginationResultOfListOfPartner = MarketJsonVoidResultAlt & { 'data'?: MarketPaginationResultOfListOfPartner | null; };

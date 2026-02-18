import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { MarketPaginationResultOfListOfDealInfoAlt } from './market-pagination-result-of-list-of-deal-info-alt.interface';

export type MarketJsonResultOfMarketPaginationResultOfListOfDealInfo = MarketJsonVoidResultAlt & { 'data'?: MarketPaginationResultOfListOfDealInfoAlt | null; };

import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { MarketPaginationResultOfListOfMarketDealAlt } from './market-pagination-result-of-list-of-market-deal-alt.interface';

export type MarketJsonResultOfMarketPaginationResultOfListOfMarketDeal = MarketJsonVoidResultAlt & { 'data'?: MarketPaginationResultOfListOfMarketDealAlt | null; };

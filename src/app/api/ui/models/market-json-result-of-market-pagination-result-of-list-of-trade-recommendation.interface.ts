import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { MarketPaginationResultOfListOfTradeRecommendation } from './market-pagination-result-of-list-of-trade-recommendation.interface';

export type MarketJsonResultOfMarketPaginationResultOfListOfTradeRecommendation = MarketJsonVoidResultAlt & { 'data'?: MarketPaginationResultOfListOfTradeRecommendation | null; };

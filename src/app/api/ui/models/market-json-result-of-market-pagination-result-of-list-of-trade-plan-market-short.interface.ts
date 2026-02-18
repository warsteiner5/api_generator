import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { MarketPaginationResultOfListOfTradePlanMarketShort } from './market-pagination-result-of-list-of-trade-plan-market-short.interface';

export type MarketJsonResultOfMarketPaginationResultOfListOfTradePlanMarketShort = MarketJsonVoidResultAlt & { 'data'?: MarketPaginationResultOfListOfTradePlanMarketShort | null; };

import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { MarketPaginationResultOfListOfTradePlanLotMarket } from './market-pagination-result-of-list-of-trade-plan-lot-market.interface';

export type MarketJsonResultOfMarketPaginationResultOfListOfTradePlanLotMarket = MarketJsonVoidResultAlt & { 'data'?: MarketPaginationResultOfListOfTradePlanLotMarket | null; };

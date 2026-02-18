import { MarketFullOrderDeal } from './market-full-order-deal.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfMarketFullOrderDeal = MarketJsonVoidResultAlt & { 'data'?: MarketFullOrderDeal | null; };

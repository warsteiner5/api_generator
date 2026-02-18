import { MarketFullDeal } from './market-full-deal.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfMarketFullDeal = MarketJsonVoidResultAlt & { 'data'?: MarketFullDeal | null; };

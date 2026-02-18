import { MarketDeal } from './market-deal.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfMarketDeal = MarketJsonVoidResultAlt & { 'data'?: MarketDeal | null; };

import { MarketDeal } from './market-deal.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfMarketDealDtoOf = MarketJsonVoidResultAlt & { 'data'?: Array<MarketDeal> | null; };

import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfMarketJsonVoidResult = MarketJsonVoidResultAlt & { 'data'?: MarketJsonVoidResultAlt | null; };

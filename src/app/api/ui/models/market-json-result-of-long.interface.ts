import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfLong = MarketJsonVoidResultAlt & { 'data'?: number; };

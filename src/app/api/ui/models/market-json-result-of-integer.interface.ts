import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfInteger = MarketJsonVoidResultAlt & { 'data'?: number; };

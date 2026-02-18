import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfDecimal = MarketJsonVoidResultAlt & { 'data'?: number; };

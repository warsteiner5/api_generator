import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfBoolean = MarketJsonVoidResultAlt & { 'data'?: boolean; };

import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfString = MarketJsonVoidResultAlt & { 'data'?: string | null; };

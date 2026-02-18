import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfListOfInteger = MarketJsonVoidResultAlt & { 'data'?: Array<number> | null; };

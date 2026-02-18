import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfNullableGuid = MarketJsonVoidResultAlt & { 'data'?: string | null; };

import { Ktru } from './ktru.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfKtru = MarketJsonVoidResultAlt & { 'data'?: Ktru | null; };

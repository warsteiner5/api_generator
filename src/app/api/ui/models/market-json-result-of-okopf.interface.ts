import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { Okopf } from './okopf.interface';

export type MarketJsonResultOfOkopf = MarketJsonVoidResultAlt & { 'data'?: Okopf | null; };

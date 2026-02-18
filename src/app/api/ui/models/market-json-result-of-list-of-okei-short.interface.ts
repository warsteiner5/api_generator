import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { OkeiShort } from './okei-short.interface';

export type MarketJsonResultOfListOfOkeiShort = MarketJsonVoidResultAlt & { 'data'?: Array<OkeiShort> | null; };

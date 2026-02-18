import { IdNameAlt } from './id-name-alt.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfListOfIdName = MarketJsonVoidResultAlt & { 'data'?: Array<IdNameAlt> | null; };

import { KeyValuePairOfStringAndString } from './key-value-pair-of-string-and-string.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfKeyValuePair2Of = MarketJsonVoidResultAlt & { 'data'?: Array<KeyValuePairOfStringAndString> | null; };

import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { Okved2ValueAlt } from './okved-2-value-alt.interface';

export type MarketJsonResultOfOkved2Value = MarketJsonVoidResultAlt & { 'data'?: Okved2ValueAlt | null; };

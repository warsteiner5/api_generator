import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { Okved2ValueAlt } from './okved-2-value-alt.interface';

export type MarketJsonResultOfListOfOkved2Value = MarketJsonVoidResultAlt & { 'data'?: Array<Okved2ValueAlt> | null; };

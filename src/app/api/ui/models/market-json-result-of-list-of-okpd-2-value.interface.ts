import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { Okpd2ValueAlt } from './okpd-2-value-alt.interface';

export type MarketJsonResultOfListOfOkpd2Value = MarketJsonVoidResultAlt & { 'data'?: Array<Okpd2ValueAlt> | null; };

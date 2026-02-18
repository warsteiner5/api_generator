import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { Okpd2ValueAlt } from './okpd-2-value-alt.interface';

export type MarketJsonResultOfOkpd2Value = MarketJsonVoidResultAlt & { 'data'?: Okpd2ValueAlt | null; };

import { Agreement2323 } from './agreement-2323.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfTaskOfAgreement2323 = MarketJsonVoidResultAlt & { 'data'?: Agreement2323 | null; };

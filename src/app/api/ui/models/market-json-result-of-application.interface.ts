import { ApplicationDto2 } from './application-dto-2.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfApplication = MarketJsonVoidResultAlt & { 'data'?: ApplicationDto2 | null; };

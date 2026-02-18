import { FederalLaw } from './federal-law.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfListOfFederalLaw = MarketJsonVoidResultAlt & { 'data'?: Array<FederalLaw> | null; };

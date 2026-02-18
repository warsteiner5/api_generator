import { Industry } from './industry.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfIndustry = MarketJsonVoidResultAlt & { 'data'?: Industry | null; };

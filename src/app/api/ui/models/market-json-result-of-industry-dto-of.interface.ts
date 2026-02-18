import { Industry } from './industry.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfIndustryDtoOf = MarketJsonVoidResultAlt & { 'data'?: Array<Industry> | null; };

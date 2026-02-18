import { FormTemplate } from './form-template.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfFormTemplate = MarketJsonVoidResultAlt & { 'data'?: FormTemplate | null; };

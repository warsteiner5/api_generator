import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { ValidationResultAlt } from './validation-result-alt.interface';

export type MarketJsonResultOfValidationResult = MarketJsonVoidResultAlt & { 'data'?: ValidationResultAlt | null; };

import { Category } from './category.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfListOfCategory = MarketJsonVoidResultAlt & { 'data'?: Array<Category> | null; };

import { Category } from './category.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfCategoryDtoOf = MarketJsonVoidResultAlt & { 'data'?: Array<Category> | null; };

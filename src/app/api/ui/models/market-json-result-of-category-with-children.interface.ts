import { CategoryWithChildren } from './category-with-children.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfCategoryWithChildren = MarketJsonVoidResultAlt & { 'data'?: CategoryWithChildren | null; };

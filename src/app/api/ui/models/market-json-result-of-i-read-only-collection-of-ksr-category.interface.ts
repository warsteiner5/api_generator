import { KsrCategoryAlt } from './ksr-category-alt.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfIReadOnlyCollectionOfKsrCategory = MarketJsonVoidResultAlt & { 'data'?: Array<KsrCategoryAlt> | null; };

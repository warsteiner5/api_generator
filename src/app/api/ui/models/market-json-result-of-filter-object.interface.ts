import { FilterObjectAlt } from './filter-object-alt.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfFilterObject = MarketJsonVoidResultAlt & { 'data'?: FilterObjectAlt | null; };

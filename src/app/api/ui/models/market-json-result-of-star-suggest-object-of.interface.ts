import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { StarSuggestObjectAlt } from './star-suggest-object-alt.interface';

export type MarketJsonResultOfStarSuggestObjectOf = MarketJsonVoidResultAlt & { 'data'?: Array<StarSuggestObjectAlt> | null; };

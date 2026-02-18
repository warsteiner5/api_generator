import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { StarLightSearchResult } from './star-light-search-result.interface';

export type MarketJsonResultOfStarLightSearchResult = MarketJsonVoidResultAlt & { 'data'?: StarLightSearchResult | null; };

import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { SearchRecommendationsResultAlt } from './search-recommendations-result-alt.interface';

export type MarketJsonResultOfSearchRecommendationsResult = MarketJsonVoidResultAlt & { 'data'?: SearchRecommendationsResultAlt | null; };

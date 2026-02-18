import { MarketJsonResultOfStarSuggestObjectOf } from '../../models/market-json-result-of-star-suggest-object-of.interface';
import { ApiMarketJsonResultOfStarSuggestObjectOf } from '../../../swagger/models/api-market-json-result-of-star-suggest-object-of';

export function adaptApiMarketJsonResultOfStarSuggestObjectOf(source?: MarketJsonResultOfStarSuggestObjectOf | null): ApiMarketJsonResultOfStarSuggestObjectOf {
  return (source ?? {}) as ApiMarketJsonResultOfStarSuggestObjectOf;
}

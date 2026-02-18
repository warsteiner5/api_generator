import { ApiMarketJsonResultOfStarSuggestObjectOf } from '../../../swagger/models/api-market-json-result-of-star-suggest-object-of';
import { MarketJsonResultOfStarSuggestObjectOf } from '../../models/market-json-result-of-star-suggest-object-of.interface';

export function adaptMarketJsonResultOfStarSuggestObjectOfToUI(source?: ApiMarketJsonResultOfStarSuggestObjectOf | null): MarketJsonResultOfStarSuggestObjectOf {
  return (source ?? {}) as MarketJsonResultOfStarSuggestObjectOf;
}

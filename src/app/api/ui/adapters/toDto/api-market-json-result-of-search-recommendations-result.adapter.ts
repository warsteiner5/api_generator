import { MarketJsonResultOfSearchRecommendationsResult } from '../../models/market-json-result-of-search-recommendations-result.interface';
import { ApiMarketJsonResultOfSearchRecommendationsResult } from '../../../swagger/models/api-market-json-result-of-search-recommendations-result';

export function adaptApiMarketJsonResultOfSearchRecommendationsResult(source?: MarketJsonResultOfSearchRecommendationsResult | null): ApiMarketJsonResultOfSearchRecommendationsResult {
  return (source ?? {}) as ApiMarketJsonResultOfSearchRecommendationsResult;
}

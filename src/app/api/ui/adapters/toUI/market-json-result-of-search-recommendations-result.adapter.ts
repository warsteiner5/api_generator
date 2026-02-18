import { ApiMarketJsonResultOfSearchRecommendationsResult } from '../../../swagger/models/api-market-json-result-of-search-recommendations-result';
import { MarketJsonResultOfSearchRecommendationsResult } from '../../models/market-json-result-of-search-recommendations-result.interface';

export function adaptMarketJsonResultOfSearchRecommendationsResultToUI(source?: ApiMarketJsonResultOfSearchRecommendationsResult | null): MarketJsonResultOfSearchRecommendationsResult {
  return (source ?? {}) as MarketJsonResultOfSearchRecommendationsResult;
}

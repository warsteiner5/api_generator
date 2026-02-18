import { ApiMarketJsonResultOfStarLightSearchResultDto } from '../../../swagger/models/api-market-json-result-of-star-light-search-result-dto';
import { MarketJsonResultOfStarLightSearchResult } from '../../models/market-json-result-of-star-light-search-result.interface';

export function adaptMarketJsonResultOfStarLightSearchResultToUI(source?: ApiMarketJsonResultOfStarLightSearchResultDto | null): MarketJsonResultOfStarLightSearchResult {
  return (source ?? {}) as MarketJsonResultOfStarLightSearchResult;
}

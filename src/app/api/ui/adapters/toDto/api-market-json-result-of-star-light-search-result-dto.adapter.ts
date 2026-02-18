import { MarketJsonResultOfStarLightSearchResult } from '../../models/market-json-result-of-star-light-search-result.interface';
import { ApiMarketJsonResultOfStarLightSearchResultDto } from '../../../swagger/models/api-market-json-result-of-star-light-search-result-dto';

export function adaptApiMarketJsonResultOfStarLightSearchResultDto(source?: MarketJsonResultOfStarLightSearchResult | null): ApiMarketJsonResultOfStarLightSearchResultDto {
  return (source ?? {}) as ApiMarketJsonResultOfStarLightSearchResultDto;
}

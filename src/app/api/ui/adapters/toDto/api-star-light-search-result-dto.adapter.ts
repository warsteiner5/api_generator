import { StarLightSearchResult } from '../../models/star-light-search-result.interface';
import { ApiStarLightSearchResultDto } from '../../../swagger/models/api-star-light-search-result-dto';

export function adaptApiStarLightSearchResultDto(source?: StarLightSearchResult | null): ApiStarLightSearchResultDto {
  return {
    TotalCount: source?.totalCount,
    TradeIds: source?.tradeIds ?? [],
  };
}

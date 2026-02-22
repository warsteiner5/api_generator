import { StarLightSearchResult } from '../../models/star-light-search-result.interface';
import { ApiStarLightSearchResultDto } from '../../../swagger/models/api-star-light-search-result-dto';

export const apiStarLightSearchResultDtoAdapter = (source?: StarLightSearchResult | null): ApiStarLightSearchResultDto => {
  return {
    TotalCount: source?.totalCount,
    TradeIds: source?.tradeIds,
  };
}

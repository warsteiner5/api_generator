import { ApiStarLightSearchResultDto } from '../../../swagger/models/api-star-light-search-result-dto';
import { StarLightSearchResult } from '../../models/star-light-search-result.interface';

export const starLightSearchResultAdapter = (source?: ApiStarLightSearchResultDto | null): StarLightSearchResult => {
  return {
    totalCount: source?.TotalCount,
    tradeIds: source?.TradeIds,
  };
}

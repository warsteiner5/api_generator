import { ApiStarLightSearchResultDto } from '../../../swagger/models/api-star-light-search-result-dto';
import { StarLightSearchResult } from '../../models/star-light-search-result.interface';

export function adaptStarLightSearchResultToUI(source?: ApiStarLightSearchResultDto | null): StarLightSearchResult {
  return {
    totalCount: source?.TotalCount ?? 0,
    tradeIds: source?.TradeIds ?? [],
  };
}

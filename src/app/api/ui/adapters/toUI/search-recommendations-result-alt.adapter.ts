import { ApiSearchRecommendationsResultAltDto } from '../../../swagger/models/api-search-recommendations-result';
import { SearchRecommendationsResultAlt } from '../../models/search-recommendations-result-alt.interface';
import { adaptSearchResultTypeAltEnumToUI } from './search-result-type-alt-enum.adapter';
import { adaptTradeRecommendationToUI } from './trade-recommendation.adapter';

export function adaptSearchRecommendationsResultAltToUI(source?: ApiSearchRecommendationsResultAltDto | null): SearchRecommendationsResultAlt {
  return {
    items: (source?.Items ?? []).map((item) => adaptTradeRecommendationToUI(item)),
    resultType: adaptSearchResultTypeAltEnumToUI(source?.ResultType),
  };
}

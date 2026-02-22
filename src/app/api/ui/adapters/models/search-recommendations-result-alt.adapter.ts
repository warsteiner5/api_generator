import { ApiSearchRecommendationsResultAltDto } from '../../../swagger/models/api-search-recommendations-result';
import { SearchRecommendationsResultAlt } from '../../models/search-recommendations-result-alt.interface';
import { searchResultTypeAltEnumAdapter } from '../enums/search-result-type-alt-enum.adapter';
import { tradeRecommendationAdapter } from './trade-recommendation.adapter';

export const searchRecommendationsResultAltAdapter = (source?: ApiSearchRecommendationsResultAltDto | null): SearchRecommendationsResultAlt => {
  return {
    items: source?.Items?.map((item) => tradeRecommendationAdapter(item)),
    resultType: source?.ResultType === null ? undefined : searchResultTypeAltEnumAdapter(source?.ResultType),
  };
}

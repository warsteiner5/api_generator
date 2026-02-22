import { SearchRecommendationsResultAlt } from '../../models/search-recommendations-result-alt.interface';
import { ApiSearchRecommendationsResultAltDto } from '../../../swagger/models/api-search-recommendations-result';
import { apiSearchResultTypeAltEnumAdapter } from '../enums/api-search-result-type.adapter';
import { apiTradeRecommendationDtoAdapter } from './api-trade-recommendation-dto.adapter';

export const apiSearchRecommendationsResultAltDtoAdapter = (source?: SearchRecommendationsResultAlt | null): ApiSearchRecommendationsResultAltDto => {
  return {
    Items: source?.items?.map((item) => apiTradeRecommendationDtoAdapter(item)),
    ResultType: source?.resultType === null ? undefined : apiSearchResultTypeAltEnumAdapter(source?.resultType),
  };
}

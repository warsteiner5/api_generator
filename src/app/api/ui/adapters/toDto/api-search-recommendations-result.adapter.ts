import { SearchRecommendationsResultAlt } from '../../models/search-recommendations-result-alt.interface';
import { ApiSearchRecommendationsResultAltDto } from '../../../swagger/models/api-search-recommendations-result';
import { adaptApiSearchResultTypeAltEnum } from './api-search-result-type.adapter';
import { adaptApiTradeRecommendationDto } from './api-trade-recommendation-dto.adapter';

export function adaptApiSearchRecommendationsResultAltDto(source?: SearchRecommendationsResultAlt | null): ApiSearchRecommendationsResultAltDto {
  return {
    Items: (source?.items ?? []).map((item) => adaptApiTradeRecommendationDto(item)),
    ResultType: adaptApiSearchResultTypeAltEnum(source?.resultType),
  };
}

/* tslint:disable */
/* eslint-disable */
import { ApiSearchResultTypeAltEnum } from '../models/api-search-result-type';
import { ApiTradeRecommendationDto } from '../models/api-trade-recommendation-dto';
export interface ApiSearchRecommendationsResultAltDto {
  Items?: Array<ApiTradeRecommendationDto> | null;
  ResultType?: ApiSearchResultTypeAltEnum;
}

/* tslint:disable */
/* eslint-disable */
import { ApiTradeRecommendationDto } from '../models/api-trade-recommendation-dto';
export interface ApiMarketPaginationResultOfListOfTradeRecommendationDto {
  currentPage?: number;
  items?: Array<ApiTradeRecommendationDto> | null;
  total?: number;
  totalPages?: number;
}

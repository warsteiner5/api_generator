import { MarketPaginationResultOfListOfTradeRecommendation } from '../../models/market-pagination-result-of-list-of-trade-recommendation.interface';
import { ApiMarketPaginationResultOfListOfTradeRecommendationDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-trade-recommendation-dto';
import { adaptApiTradeRecommendationDto } from './api-trade-recommendation-dto.adapter';

export function adaptApiMarketPaginationResultOfListOfTradeRecommendationDto(source?: MarketPaginationResultOfListOfTradeRecommendation | null): ApiMarketPaginationResultOfListOfTradeRecommendationDto {
  return {
    currentPage: source?.currentPage,
    items: (source?.items ?? []).map((item) => adaptApiTradeRecommendationDto(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}

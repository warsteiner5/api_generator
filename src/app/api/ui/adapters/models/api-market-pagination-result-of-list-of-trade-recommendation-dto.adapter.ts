import { MarketPaginationResultOfListOfTradeRecommendation } from '../../models/market-pagination-result-of-list-of-trade-recommendation.interface';
import { ApiMarketPaginationResultOfListOfTradeRecommendationDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-trade-recommendation-dto';
import { apiTradeRecommendationDtoAdapter } from './api-trade-recommendation-dto.adapter';

export const apiMarketPaginationResultOfListOfTradeRecommendationDtoAdapter = (source?: MarketPaginationResultOfListOfTradeRecommendation | null): ApiMarketPaginationResultOfListOfTradeRecommendationDto => {
  return {
    currentPage: source?.currentPage,
    items: source?.items?.map((item) => apiTradeRecommendationDtoAdapter(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}

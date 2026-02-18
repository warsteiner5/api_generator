import { ApiMarketPaginationResultOfListOfTradeRecommendationDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-trade-recommendation-dto';
import { MarketPaginationResultOfListOfTradeRecommendation } from '../../models/market-pagination-result-of-list-of-trade-recommendation.interface';
import { adaptTradeRecommendationToUI } from './trade-recommendation.adapter';

export function adaptMarketPaginationResultOfListOfTradeRecommendationToUI(source?: ApiMarketPaginationResultOfListOfTradeRecommendationDto | null): MarketPaginationResultOfListOfTradeRecommendation {
  return {
    currentPage: source?.currentPage ?? 0,
    items: (source?.items ?? []).map((item) => adaptTradeRecommendationToUI(item)),
    total: source?.total ?? 0,
    totalPages: source?.totalPages ?? 0,
  };
}

import { ApiMarketPaginationResultOfListOfTradeRecommendationDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-trade-recommendation-dto';
import { MarketPaginationResultOfListOfTradeRecommendation } from '../../models/market-pagination-result-of-list-of-trade-recommendation.interface';
import { tradeRecommendationAdapter } from './trade-recommendation.adapter';

export const marketPaginationResultOfListOfTradeRecommendationAdapter = (source?: ApiMarketPaginationResultOfListOfTradeRecommendationDto | null): MarketPaginationResultOfListOfTradeRecommendation => {
  return {
    currentPage: source?.currentPage,
    items: source?.items?.map((item) => tradeRecommendationAdapter(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}

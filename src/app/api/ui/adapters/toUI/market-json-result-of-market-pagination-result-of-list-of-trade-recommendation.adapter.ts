import { ApiMarketJsonResultOfMarketPaginationResultOfListOfTradeRecommendationDto } from '../../../swagger/models/api-market-json-result-of-market-pagination-result-of-list-of-trade-recommendation-dto';
import { MarketJsonResultOfMarketPaginationResultOfListOfTradeRecommendation } from '../../models/market-json-result-of-market-pagination-result-of-list-of-trade-recommendation.interface';

export function adaptMarketJsonResultOfMarketPaginationResultOfListOfTradeRecommendationToUI(source?: ApiMarketJsonResultOfMarketPaginationResultOfListOfTradeRecommendationDto | null): MarketJsonResultOfMarketPaginationResultOfListOfTradeRecommendation {
  return (source ?? {}) as MarketJsonResultOfMarketPaginationResultOfListOfTradeRecommendation;
}

import { MarketJsonResultOfMarketPaginationResultOfListOfTradeRecommendation } from '../../models/market-json-result-of-market-pagination-result-of-list-of-trade-recommendation.interface';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfTradeRecommendationDto } from '../../../swagger/models/api-market-json-result-of-market-pagination-result-of-list-of-trade-recommendation-dto';

export function adaptApiMarketJsonResultOfMarketPaginationResultOfListOfTradeRecommendationDto(source?: MarketJsonResultOfMarketPaginationResultOfListOfTradeRecommendation | null): ApiMarketJsonResultOfMarketPaginationResultOfListOfTradeRecommendationDto {
  return (source ?? {}) as ApiMarketJsonResultOfMarketPaginationResultOfListOfTradeRecommendationDto;
}

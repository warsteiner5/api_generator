import { TradeRecommendationFilter } from '../../models/trade-recommendation-filter.interface';
import { ApiTradeRecommendationFilterDto } from '../../../swagger/models/api-trade-recommendation-filter-dto';

export const apiTradeRecommendationFilterDtoAdapter = (source?: TradeRecommendationFilter | null): ApiTradeRecommendationFilterDto => {
  return (source ?? {}) as ApiTradeRecommendationFilterDto;
}

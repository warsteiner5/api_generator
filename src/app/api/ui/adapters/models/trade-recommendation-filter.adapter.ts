import { ApiTradeRecommendationFilterDto } from '../../../swagger/models/api-trade-recommendation-filter-dto';
import { TradeRecommendationFilter } from '../../models/trade-recommendation-filter.interface';

export const tradeRecommendationFilterAdapter = (source?: ApiTradeRecommendationFilterDto | null): TradeRecommendationFilter => {
  return (source ?? {}) as TradeRecommendationFilter;
}

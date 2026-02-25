import { ApiTradeRecommendationFilterDto } from '../../../swagger/models/api-trade-recommendation-filter-dto';
import { TradeRecommendationFilter } from '../../models/trade-recommendation-filter.interface';
import { baseFilterObjectAltAdapter } from './base-filter-object-alt.adapter';

export const tradeRecommendationFilterAdapter = (source?: ApiTradeRecommendationFilterDto | null): TradeRecommendationFilter => {
  return {
    ...baseFilterObjectAltAdapter(source as unknown as Parameters<typeof baseFilterObjectAltAdapter>[0]),
  };
}

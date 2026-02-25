import { TradeRecommendationFilter } from '../../models/trade-recommendation-filter.interface';
import { ApiTradeRecommendationFilterDto } from '../../../swagger/models/api-trade-recommendation-filter-dto';
import { apiBaseFilterObjectAltDtoAdapter } from './api-base-filter-object.adapter';

export const apiTradeRecommendationFilterDtoAdapter = (source?: TradeRecommendationFilter | null): ApiTradeRecommendationFilterDto => {
  return {
    ...apiBaseFilterObjectAltDtoAdapter(source as unknown as Parameters<typeof apiBaseFilterObjectAltDtoAdapter>[0]),
  };
}

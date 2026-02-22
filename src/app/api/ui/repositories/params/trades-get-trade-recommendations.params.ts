import { TradeRecommendationFilter } from '../../models/trade-recommendation-filter.interface';
import { TradesGetTradeRecommendations$Params } from '../../../swagger/fn/trades/trades-get-trade-recommendations';
import { apiTradeRecommendationFilterDtoAdapter } from '../../adapters/models/api-trade-recommendation-filter-dto.adapter';

// @ts-ignore
export interface TradesGetTradeRecommendationsParams {
  body?: TradeRecommendationFilter;
}

export function tradesGetTradeRecommendationsAdapter(params?: TradesGetTradeRecommendationsParams): TradesGetTradeRecommendations$Params {
  if (!params) {
    return {} as TradesGetTradeRecommendations$Params;
  }
  return {
      body: apiTradeRecommendationFilterDtoAdapter(params.body),
  };
}

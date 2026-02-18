import { TradeRecommendationFilter } from '../../models/trade-recommendation-filter.interface';
import { TradesGetTradeRecommendations$Params } from '../../../swagger/fn/trades/trades-get-trade-recommendations';
import { adaptApiTradeRecommendationFilterDto } from '../../adapters/toDto/api-trade-recommendation-filter-dto.adapter';

export interface TradesGetTradeRecommendationsParams {
  body?: TradeRecommendationFilter;
}

export const tradesGetTradeRecommendationsParamsAdapter = {
  adapt(params?: TradesGetTradeRecommendationsParams): TradesGetTradeRecommendations$Params {
    if (!params) {
      return {} as TradesGetTradeRecommendations$Params;
    }
    return {
      body: adaptApiTradeRecommendationFilterDto(params.body),
    };
  }
};

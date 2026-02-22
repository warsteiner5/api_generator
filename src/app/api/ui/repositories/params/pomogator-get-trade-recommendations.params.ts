import { PomogatorGetTradeRecommendations$Params } from '../../../swagger/fn/pomogator/pomogator-get-trade-recommendations';
import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { apiSearchObjectAltDtoAdapter } from '../../adapters/models/api-search-object.adapter';

// @ts-ignore
export interface PomogatorGetTradeRecommendationsParams {
  body?: SearchObjectAlt;
}

export function pomogatorGetTradeRecommendationsAdapter(params?: PomogatorGetTradeRecommendationsParams): PomogatorGetTradeRecommendations$Params {
  if (!params) {
    return {} as PomogatorGetTradeRecommendations$Params;
  }
  return {
      body: apiSearchObjectAltDtoAdapter(params.body),
  };
}

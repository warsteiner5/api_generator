import { PomogatorGetTradeRecommendationsExtended$Params } from '../../../swagger/fn/pomogator/pomogator-get-trade-recommendations-extended';
import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { apiSearchObjectAltDtoAdapter } from '../../adapters/models/api-search-object.adapter';

// @ts-ignore
export interface PomogatorGetTradeRecommendationsExtendedParams {
  body?: SearchObjectAlt;
}

export function pomogatorGetTradeRecommendationsExtendedAdapter(params?: PomogatorGetTradeRecommendationsExtendedParams): PomogatorGetTradeRecommendationsExtended$Params {
  if (!params) {
    return {} as PomogatorGetTradeRecommendationsExtended$Params;
  }
  return {
      body: apiSearchObjectAltDtoAdapter(params.body),
  };
}

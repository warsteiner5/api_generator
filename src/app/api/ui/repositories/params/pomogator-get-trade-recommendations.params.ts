import { PomogatorGetTradeRecommendations$Params } from '../../../swagger/fn/pomogator/pomogator-get-trade-recommendations';
import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { adaptApiSearchObjectAltDto } from '../../adapters/toDto/api-search-object.adapter';

export interface PomogatorGetTradeRecommendationsParams {
  body?: SearchObjectAlt;
}

export const pomogatorGetTradeRecommendationsParamsAdapter = {
  adapt(params?: PomogatorGetTradeRecommendationsParams): PomogatorGetTradeRecommendations$Params {
    if (!params) {
      return {} as PomogatorGetTradeRecommendations$Params;
    }
    return {
      body: adaptApiSearchObjectAltDto(params.body),
    };
  }
};

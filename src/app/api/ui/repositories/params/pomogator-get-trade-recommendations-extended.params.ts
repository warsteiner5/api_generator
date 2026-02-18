import { PomogatorGetTradeRecommendationsExtended$Params } from '../../../swagger/fn/pomogator/pomogator-get-trade-recommendations-extended';
import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { adaptApiSearchObjectAltDto } from '../../adapters/toDto/api-search-object.adapter';

export interface PomogatorGetTradeRecommendationsExtendedParams {
  body?: SearchObjectAlt;
}

export const pomogatorGetTradeRecommendationsExtendedParamsAdapter = {
  adapt(params?: PomogatorGetTradeRecommendationsExtendedParams): PomogatorGetTradeRecommendationsExtended$Params {
    if (!params) {
      return {} as PomogatorGetTradeRecommendationsExtended$Params;
    }
    return {
      body: adaptApiSearchObjectAltDto(params.body),
    };
  }
};

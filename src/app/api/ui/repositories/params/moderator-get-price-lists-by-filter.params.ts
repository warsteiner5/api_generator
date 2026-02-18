import { ModeratorGetPriceListsByFilter$Params } from '../../../swagger/fn/moderator/moderator-get-price-lists-by-filter';
import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { adaptApiSearchObjectAltDto } from '../../adapters/toDto/api-search-object.adapter';

export interface ModeratorGetPriceListsByFilterParams {
  body?: SearchObjectAlt;
}

export const moderatorGetPriceListsByFilterParamsAdapter = {
  adapt(params?: ModeratorGetPriceListsByFilterParams): ModeratorGetPriceListsByFilter$Params {
    if (!params) {
      return {} as ModeratorGetPriceListsByFilter$Params;
    }
    return {
      body: adaptApiSearchObjectAltDto(params.body),
    };
  }
};

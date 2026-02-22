import { ModeratorGetPriceListsByFilter$Params } from '../../../swagger/fn/moderator/moderator-get-price-lists-by-filter';
import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { apiSearchObjectAltDtoAdapter } from '../../adapters/models/api-search-object.adapter';

// @ts-ignore
export interface ModeratorGetPriceListsByFilterParams {
  body?: SearchObjectAlt;
}

export function moderatorGetPriceListsByFilterAdapter(params?: ModeratorGetPriceListsByFilterParams): ModeratorGetPriceListsByFilter$Params {
  if (!params) {
    return {} as ModeratorGetPriceListsByFilter$Params;
  }
  return {
      body: apiSearchObjectAltDtoAdapter(params.body),
  };
}

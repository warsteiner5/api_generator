import { OffersCount$Params } from '../../../swagger/fn/offers/offers-count';
import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { apiSearchObjectAltDtoAdapter } from '../../adapters/models/api-search-object.adapter';

// @ts-ignore
export interface OffersCountParams {
  body?: SearchObjectAlt;
}

export function offersCountAdapter(params?: OffersCountParams): OffersCount$Params {
  if (!params) {
    return {} as OffersCount$Params;
  }
  return {
      body: apiSearchObjectAltDtoAdapter(params.body),
  };
}

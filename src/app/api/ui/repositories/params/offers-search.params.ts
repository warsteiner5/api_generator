import { OffersSearch$Params } from '../../../swagger/fn/offers/offers-search';
import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { apiSearchObjectAltDtoAdapter } from '../../adapters/models/api-search-object.adapter';

// @ts-ignore
export interface OffersSearchParams {
  body?: SearchObjectAlt;
}

export function offersSearchAdapter(params?: OffersSearchParams): OffersSearch$Params {
  if (!params) {
    return {} as OffersSearch$Params;
  }
  return {
      body: apiSearchObjectAltDtoAdapter(params.body),
  };
}

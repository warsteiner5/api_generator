import { OffersModerate$Params } from '../../../swagger/fn/offers/offers-moderate';
import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { apiSearchObjectAltDtoAdapter } from '../../adapters/models/api-search-object.adapter';

// @ts-ignore
export interface OffersModerateParams {
  body?: SearchObjectAlt;
}

export function offersModerateAdapter(params?: OffersModerateParams): OffersModerate$Params {
  if (!params) {
    return {} as OffersModerate$Params;
  }
  return {
      body: apiSearchObjectAltDtoAdapter(params.body),
  };
}

import { OffersGetOffers$Params } from '../../../swagger/fn/offers/offers-get-offers';
import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { apiSearchObjectAltDtoAdapter } from '../../adapters/models/api-search-object.adapter';

// @ts-ignore
export interface OffersGetOffersParams {
  body?: SearchObjectAlt;
}

export function offersGetOffersAdapter(params?: OffersGetOffersParams): OffersGetOffers$Params {
  if (!params) {
    return {} as OffersGetOffers$Params;
  }
  return {
      body: apiSearchObjectAltDtoAdapter(params.body),
  };
}

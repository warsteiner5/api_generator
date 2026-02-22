import { OffersRemoveParticipantOffer$Params } from '../../../swagger/fn/offers/offers-remove-participant-offer';
import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { apiSearchObjectAltDtoAdapter } from '../../adapters/models/api-search-object.adapter';

// @ts-ignore
export interface OffersRemoveParticipantOfferParams {
  body?: SearchObjectAlt;
}

export function offersRemoveParticipantOfferAdapter(params?: OffersRemoveParticipantOfferParams): OffersRemoveParticipantOffer$Params {
  if (!params) {
    return {} as OffersRemoveParticipantOffer$Params;
  }
  return {
      body: apiSearchObjectAltDtoAdapter(params.body),
  };
}

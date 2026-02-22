import { OfferFilterAlt } from '../../models/offer-filter-alt.interface';
import { ParticipantOfferGetOffers$Params } from '../../../swagger/fn/participant-offer/participant-offer-get-offers';
import { apiOfferFilterAltDtoAdapter } from '../../adapters/models/api-offer-filter.adapter';

// @ts-ignore
export interface ParticipantOfferGetOffersParams {
  body?: OfferFilterAlt;
}

export function participantOfferGetOffersAdapter(params?: ParticipantOfferGetOffersParams): ParticipantOfferGetOffers$Params {
  if (!params) {
    return {} as ParticipantOfferGetOffers$Params;
  }
  return {
      body: apiOfferFilterAltDtoAdapter(params.body),
  };
}

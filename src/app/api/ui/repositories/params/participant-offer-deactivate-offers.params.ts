import { ParticipantOfferDeactivateOffers$Params } from '../../../swagger/fn/participant-offer/participant-offer-deactivate-offers';

// @ts-ignore
export interface ParticipantOfferDeactivateOffersParams {
  body?: number[];
}

export function participantOfferDeactivateOffersAdapter(params?: ParticipantOfferDeactivateOffersParams): ParticipantOfferDeactivateOffers$Params {
  if (!params) {
    return {} as ParticipantOfferDeactivateOffers$Params;
  }
  return {
      body: params.body,
  };
}

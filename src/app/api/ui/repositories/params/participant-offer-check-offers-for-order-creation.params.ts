import { ParticipantOfferCheckOffersForOrderCreation$Params } from '../../../swagger/fn/participant-offer/participant-offer-check-offers-for-order-creation';

// @ts-ignore
export interface ParticipantOfferCheckOffersForOrderCreationParams {
  body?: number[];
}

export function participantOfferCheckOffersForOrderCreationAdapter(params?: ParticipantOfferCheckOffersForOrderCreationParams): ParticipantOfferCheckOffersForOrderCreation$Params {
  if (!params) {
    return {} as ParticipantOfferCheckOffersForOrderCreation$Params;
  }
  return {
      body: params.body,
  };
}

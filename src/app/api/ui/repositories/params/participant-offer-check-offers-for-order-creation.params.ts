import { ParticipantOfferCheckOffersForOrderCreation$Params } from '../../../swagger/fn/participant-offer/participant-offer-check-offers-for-order-creation';

export interface ParticipantOfferCheckOffersForOrderCreationParams {
  body?: number[];
}

export const participantOfferCheckOffersForOrderCreationParamsAdapter = {
  adapt(params?: ParticipantOfferCheckOffersForOrderCreationParams): ParticipantOfferCheckOffersForOrderCreation$Params {
    if (!params) {
      return {} as ParticipantOfferCheckOffersForOrderCreation$Params;
    }
    return {
      body: params.body,
    };
  }
};

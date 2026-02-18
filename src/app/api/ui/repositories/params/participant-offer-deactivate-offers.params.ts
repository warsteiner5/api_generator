import { ParticipantOfferDeactivateOffers$Params } from '../../../swagger/fn/participant-offer/participant-offer-deactivate-offers';

export interface ParticipantOfferDeactivateOffersParams {
  body?: number[];
}

export const participantOfferDeactivateOffersParamsAdapter = {
  adapt(params?: ParticipantOfferDeactivateOffersParams): ParticipantOfferDeactivateOffers$Params {
    if (!params) {
      return {} as ParticipantOfferDeactivateOffers$Params;
    }
    return {
      body: params.body,
    };
  }
};

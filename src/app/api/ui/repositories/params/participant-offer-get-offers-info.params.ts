import { ParticipantOfferGetOffersInfo$Params } from '../../../swagger/fn/participant-offer/participant-offer-get-offers-info';

export interface ParticipantOfferGetOffersInfoParams {
  body?: number[];
}

export const participantOfferGetOffersInfoParamsAdapter = {
  adapt(params?: ParticipantOfferGetOffersInfoParams): ParticipantOfferGetOffersInfo$Params {
    if (!params) {
      return {} as ParticipantOfferGetOffersInfo$Params;
    }
    return {
      body: params.body,
    };
  }
};

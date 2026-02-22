import { ParticipantOfferGetOffersInfo$Params } from '../../../swagger/fn/participant-offer/participant-offer-get-offers-info';

// @ts-ignore
export interface ParticipantOfferGetOffersInfoParams {
  body?: number[];
}

export function participantOfferGetOffersInfoAdapter(params?: ParticipantOfferGetOffersInfoParams): ParticipantOfferGetOffersInfo$Params {
  if (!params) {
    return {} as ParticipantOfferGetOffersInfo$Params;
  }
  return {
      body: params.body,
  };
}

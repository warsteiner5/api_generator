import { ParticipantOfferGetOfferInfo$Params } from '../../../swagger/fn/participant-offer/participant-offer-get-offer-info';

// @ts-ignore
export interface ParticipantOfferGetOfferInfoParams {
  offerId: number;
}

export function participantOfferGetOfferInfoAdapter(params?: ParticipantOfferGetOfferInfoParams): ParticipantOfferGetOfferInfo$Params {
  if (!params) {
    return {} as ParticipantOfferGetOfferInfo$Params;
  }
  return {
      offerId: params.offerId,
  };
}

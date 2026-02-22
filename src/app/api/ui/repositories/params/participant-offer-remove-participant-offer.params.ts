import { ParticipantOfferRemoveParticipantOffer$Params } from '../../../swagger/fn/participant-offer/participant-offer-remove-participant-offer';

// @ts-ignore
export interface ParticipantOfferRemoveParticipantOfferParams {
  body?: number[];
}

export function participantOfferRemoveParticipantOfferAdapter(params?: ParticipantOfferRemoveParticipantOfferParams): ParticipantOfferRemoveParticipantOffer$Params {
  if (!params) {
    return {} as ParticipantOfferRemoveParticipantOffer$Params;
  }
  return {
      body: params.body,
  };
}

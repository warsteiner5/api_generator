import { ParticipantOfferRemoveParticipantOffer$Params } from '../../../swagger/fn/participant-offer/participant-offer-remove-participant-offer';

export interface ParticipantOfferRemoveParticipantOfferParams {
  body?: number[];
}

export const participantOfferRemoveParticipantOfferParamsAdapter = {
  adapt(params?: ParticipantOfferRemoveParticipantOfferParams): ParticipantOfferRemoveParticipantOffer$Params {
    if (!params) {
      return {} as ParticipantOfferRemoveParticipantOffer$Params;
    }
    return {
      body: params.body,
    };
  }
};

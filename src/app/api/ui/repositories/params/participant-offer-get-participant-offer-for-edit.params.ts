import { ParticipantOfferGetParticipantOfferForEdit$Params } from '../../../swagger/fn/participant-offer/participant-offer-get-participant-offer-for-edit';

export interface ParticipantOfferGetParticipantOfferForEditParams {
  id: number;
}

export const participantOfferGetParticipantOfferForEditParamsAdapter = {
  adapt(params?: ParticipantOfferGetParticipantOfferForEditParams): ParticipantOfferGetParticipantOfferForEdit$Params {
    if (!params) {
      return {} as ParticipantOfferGetParticipantOfferForEdit$Params;
    }
    return {
      id: params.id,
    };
  }
};

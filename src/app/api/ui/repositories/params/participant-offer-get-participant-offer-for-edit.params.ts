import { ParticipantOfferGetParticipantOfferForEdit$Params } from '../../../swagger/fn/participant-offer/participant-offer-get-participant-offer-for-edit';

// @ts-ignore
export interface ParticipantOfferGetParticipantOfferForEditParams {
  id: number;
}

export function participantOfferGetParticipantOfferForEditAdapter(params?: ParticipantOfferGetParticipantOfferForEditParams): ParticipantOfferGetParticipantOfferForEdit$Params {
  if (!params) {
    return {} as ParticipantOfferGetParticipantOfferForEdit$Params;
  }
  return {
      id: params.id,
  };
}

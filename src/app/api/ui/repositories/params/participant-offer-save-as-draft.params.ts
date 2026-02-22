import { ParticipantOffer } from '../../models/participant-offer.interface';
import { ParticipantOfferSaveAsDraft$Params } from '../../../swagger/fn/participant-offer/participant-offer-save-as-draft';
import { apiParticipantOfferDtoAdapter } from '../../adapters/models/api-participant-offer-dto.adapter';

// @ts-ignore
export interface ParticipantOfferSaveAsDraftParams {
  body?: ParticipantOffer;
}

export function participantOfferSaveAsDraftAdapter(params?: ParticipantOfferSaveAsDraftParams): ParticipantOfferSaveAsDraft$Params {
  if (!params) {
    return {} as ParticipantOfferSaveAsDraft$Params;
  }
  return {
      body: apiParticipantOfferDtoAdapter(params.body),
  };
}

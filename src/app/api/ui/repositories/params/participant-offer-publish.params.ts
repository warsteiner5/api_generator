import { ParticipantOffer } from '../../models/participant-offer.interface';
import { ParticipantOfferPublish$Params } from '../../../swagger/fn/participant-offer/participant-offer-publish';
import { apiParticipantOfferDtoAdapter } from '../../adapters/models/api-participant-offer-dto.adapter';

// @ts-ignore
export interface ParticipantOfferPublishParams {
  body?: ParticipantOffer;
}

export function participantOfferPublishAdapter(params?: ParticipantOfferPublishParams): ParticipantOfferPublish$Params {
  if (!params) {
    return {} as ParticipantOfferPublish$Params;
  }
  return {
      body: apiParticipantOfferDtoAdapter(params.body),
  };
}

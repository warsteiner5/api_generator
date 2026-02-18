import { ParticipantOffer } from '../../models/participant-offer.interface';
import { ParticipantOfferPublish$Params } from '../../../swagger/fn/participant-offer/participant-offer-publish';
import { adaptApiParticipantOfferDto } from '../../adapters/toDto/api-participant-offer-dto.adapter';

export interface ParticipantOfferPublishParams {
  body?: ParticipantOffer;
}

export const participantOfferPublishParamsAdapter = {
  adapt(params?: ParticipantOfferPublishParams): ParticipantOfferPublish$Params {
    if (!params) {
      return {} as ParticipantOfferPublish$Params;
    }
    return {
      body: adaptApiParticipantOfferDto(params.body),
    };
  }
};

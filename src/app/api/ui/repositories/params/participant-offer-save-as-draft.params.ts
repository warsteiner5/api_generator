import { ParticipantOffer } from '../../models/participant-offer.interface';
import { ParticipantOfferSaveAsDraft$Params } from '../../../swagger/fn/participant-offer/participant-offer-save-as-draft';
import { adaptApiParticipantOfferDto } from '../../adapters/toDto/api-participant-offer-dto.adapter';

export interface ParticipantOfferSaveAsDraftParams {
  body?: ParticipantOffer;
}

export const participantOfferSaveAsDraftParamsAdapter = {
  adapt(params?: ParticipantOfferSaveAsDraftParams): ParticipantOfferSaveAsDraft$Params {
    if (!params) {
      return {} as ParticipantOfferSaveAsDraft$Params;
    }
    return {
      body: adaptApiParticipantOfferDto(params.body),
    };
  }
};

import { ParticipantOfferGetPublicOfferIds$Params } from '../../../swagger/fn/participant-offer/participant-offer-get-public-offer-ids';
import { PublicOffersParamAlt } from '../../models/public-offers-param-alt.interface';
import { adaptApiPublicOffersParamAltDto } from '../../adapters/toDto/api-public-offers-param.adapter';

export interface ParticipantOfferGetPublicOfferIdsParams {
  body?: PublicOffersParamAlt;
}

export const participantOfferGetPublicOfferIdsParamsAdapter = {
  adapt(params?: ParticipantOfferGetPublicOfferIdsParams): ParticipantOfferGetPublicOfferIds$Params {
    if (!params) {
      return {} as ParticipantOfferGetPublicOfferIds$Params;
    }
    return {
      body: adaptApiPublicOffersParamAltDto(params.body),
    };
  }
};

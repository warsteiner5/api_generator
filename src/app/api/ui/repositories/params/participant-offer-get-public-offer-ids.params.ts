import { ParticipantOfferGetPublicOfferIds$Params } from '../../../swagger/fn/participant-offer/participant-offer-get-public-offer-ids';
import { PublicOffersParamAlt } from '../../models/public-offers-param-alt.interface';
import { apiPublicOffersParamAltDtoAdapter } from '../../adapters/models/api-public-offers-param.adapter';

// @ts-ignore
export interface ParticipantOfferGetPublicOfferIdsParams {
  body?: PublicOffersParamAlt;
}

export function participantOfferGetPublicOfferIdsAdapter(params?: ParticipantOfferGetPublicOfferIdsParams): ParticipantOfferGetPublicOfferIds$Params {
  if (!params) {
    return {} as ParticipantOfferGetPublicOfferIds$Params;
  }
  return {
      body: apiPublicOffersParamAltDtoAdapter(params.body),
  };
}

import { IsActualOffersParamAlt } from '../../models/is-actual-offers-param-alt.interface';
import { ParticipantOfferGetActualOfferIds$Params } from '../../../swagger/fn/participant-offer/participant-offer-get-actual-offer-ids';
import { apiIsActualOffersParamAltDtoAdapter } from '../../adapters/models/api-is-actual-offers-param.adapter';

// @ts-ignore
export interface ParticipantOfferGetActualOfferIdsParams {
  body?: IsActualOffersParamAlt;
}

export function participantOfferGetActualOfferIdsAdapter(params?: ParticipantOfferGetActualOfferIdsParams): ParticipantOfferGetActualOfferIds$Params {
  if (!params) {
    return {} as ParticipantOfferGetActualOfferIds$Params;
  }
  return {
      body: apiIsActualOffersParamAltDtoAdapter(params.body),
  };
}

import { IsActualOffersParamAlt } from '../../models/is-actual-offers-param-alt.interface';
import { ParticipantOfferGetActualOfferIds$Params } from '../../../swagger/fn/participant-offer/participant-offer-get-actual-offer-ids';
import { adaptApiIsActualOffersParamAltDto } from '../../adapters/toDto/api-is-actual-offers-param.adapter';

export interface ParticipantOfferGetActualOfferIdsParams {
  body?: IsActualOffersParamAlt;
}

export const participantOfferGetActualOfferIdsParamsAdapter = {
  adapt(params?: ParticipantOfferGetActualOfferIdsParams): ParticipantOfferGetActualOfferIds$Params {
    if (!params) {
      return {} as ParticipantOfferGetActualOfferIds$Params;
    }
    return {
      body: adaptApiIsActualOffersParamAltDto(params.body),
    };
  }
};

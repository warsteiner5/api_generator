import { OfferFilterAlt } from '../../models/offer-filter-alt.interface';
import { ParticipantOfferGetOffers$Params } from '../../../swagger/fn/participant-offer/participant-offer-get-offers';
import { adaptApiOfferFilterAltDto } from '../../adapters/toDto/api-offer-filter.adapter';

export interface ParticipantOfferGetOffersParams {
  body?: OfferFilterAlt;
}

export const participantOfferGetOffersParamsAdapter = {
  adapt(params?: ParticipantOfferGetOffersParams): ParticipantOfferGetOffers$Params {
    if (!params) {
      return {} as ParticipantOfferGetOffers$Params;
    }
    return {
      body: adaptApiOfferFilterAltDto(params.body),
    };
  }
};

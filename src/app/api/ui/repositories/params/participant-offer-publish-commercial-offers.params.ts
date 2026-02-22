import { OfferSignedPrintForm } from '../../models/offer-signed-print-form.interface';
import { ParticipantOfferPublishCommercialOffers$Params } from '../../../swagger/fn/participant-offer/participant-offer-publish-commercial-offers';
import { apiOfferSignedPrintFormDtoAdapter } from '../../adapters/models/api-offer-signed-print-form-dto.adapter';

// @ts-ignore
export interface ParticipantOfferPublishCommercialOffersParams {
  body?: OfferSignedPrintForm[];
}

export function participantOfferPublishCommercialOffersAdapter(params?: ParticipantOfferPublishCommercialOffersParams): ParticipantOfferPublishCommercialOffers$Params {
  if (!params) {
    return {} as ParticipantOfferPublishCommercialOffers$Params;
  }
  return {
      body: (params.body ?? []).map((item) => apiOfferSignedPrintFormDtoAdapter(item)),
  };
}

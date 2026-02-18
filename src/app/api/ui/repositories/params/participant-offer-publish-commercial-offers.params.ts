import { OfferSignedPrintForm } from '../../models/offer-signed-print-form.interface';
import { ParticipantOfferPublishCommercialOffers$Params } from '../../../swagger/fn/participant-offer/participant-offer-publish-commercial-offers';
import { adaptApiOfferSignedPrintFormDto } from '../../adapters/toDto/api-offer-signed-print-form-dto.adapter';

export interface ParticipantOfferPublishCommercialOffersParams {
  body?: OfferSignedPrintForm[];
}

export const participantOfferPublishCommercialOffersParamsAdapter = {
  adapt(params?: ParticipantOfferPublishCommercialOffersParams): ParticipantOfferPublishCommercialOffers$Params {
    if (!params) {
      return {} as ParticipantOfferPublishCommercialOffers$Params;
    }
    return {
      body: (params.body ?? []).map((item) => adaptApiOfferSignedPrintFormDto(item)),
    };
  }
};

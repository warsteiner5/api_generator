import { ExternalPublishParticipantOffer } from '../../models/external-publish-participant-offer.interface';
import { OffersConfirmExternal$Params } from '../../../swagger/fn/offers/offers-confirm-external';
import { adaptApiExternalPublishParticipantOfferDto } from '../../adapters/toDto/api-external-publish-participant-offer-dto.adapter';

export interface OffersConfirmExternalParams {
  body?: ExternalPublishParticipantOffer;
}

export const offersConfirmExternalParamsAdapter = {
  adapt(params?: OffersConfirmExternalParams): OffersConfirmExternal$Params {
    if (!params) {
      return {} as OffersConfirmExternal$Params;
    }
    return {
      body: adaptApiExternalPublishParticipantOfferDto(params.body),
    };
  }
};

import { ExternalPublishParticipantOffer } from '../../models/external-publish-participant-offer.interface';
import { OffersConfirmExternal$Params } from '../../../swagger/fn/offers/offers-confirm-external';
import { apiExternalPublishParticipantOfferDtoAdapter } from '../../adapters/models/api-external-publish-participant-offer-dto.adapter';

// @ts-ignore
export interface OffersConfirmExternalParams {
  body?: ExternalPublishParticipantOffer;
}

export function offersConfirmExternalAdapter(params?: OffersConfirmExternalParams): OffersConfirmExternal$Params {
  if (!params) {
    return {} as OffersConfirmExternal$Params;
  }
  return {
      body: apiExternalPublishParticipantOfferDtoAdapter(params.body),
  };
}

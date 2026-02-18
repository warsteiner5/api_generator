import { OffersCreateParticipantOfferActualizationRequest$Params } from '../../../swagger/fn/offers/offers-create-participant-offer-actualization-request';

export interface OffersCreateParticipantOfferActualizationRequestParams {
  id: number;
}

export const offersCreateParticipantOfferActualizationRequestParamsAdapter = {
  adapt(params?: OffersCreateParticipantOfferActualizationRequestParams): OffersCreateParticipantOfferActualizationRequest$Params {
    if (!params) {
      return {} as OffersCreateParticipantOfferActualizationRequest$Params;
    }
    return {
      id: params.id,
    };
  }
};

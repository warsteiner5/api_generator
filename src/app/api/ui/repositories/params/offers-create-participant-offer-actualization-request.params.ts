import { OffersCreateParticipantOfferActualizationRequest$Params } from '../../../swagger/fn/offers/offers-create-participant-offer-actualization-request';

// @ts-ignore
export interface OffersCreateParticipantOfferActualizationRequestParams {
  id: number;
}

export function offersCreateParticipantOfferActualizationRequestAdapter(params?: OffersCreateParticipantOfferActualizationRequestParams): OffersCreateParticipantOfferActualizationRequest$Params {
  if (!params) {
    return {} as OffersCreateParticipantOfferActualizationRequest$Params;
  }
  return {
      id: params.id,
  };
}

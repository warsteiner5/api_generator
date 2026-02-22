import { ParticipantOfferCommercialPrintForm$Params } from '../../../swagger/fn/participant-offer/participant-offer-commercial-print-form';

// @ts-ignore
export interface ParticipantOfferCommercialPrintFormParams {
  id: number;
}

export function participantOfferCommercialPrintFormAdapter(params?: ParticipantOfferCommercialPrintFormParams): ParticipantOfferCommercialPrintForm$Params {
  if (!params) {
    return {} as ParticipantOfferCommercialPrintForm$Params;
  }
  return {
      id: params.id,
  };
}

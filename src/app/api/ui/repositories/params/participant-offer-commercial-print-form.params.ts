import { ParticipantOfferCommercialPrintForm$Params } from '../../../swagger/fn/participant-offer/participant-offer-commercial-print-form';

export interface ParticipantOfferCommercialPrintFormParams {
  id: number;
}

export const participantOfferCommercialPrintFormParamsAdapter = {
  adapt(params?: ParticipantOfferCommercialPrintFormParams): ParticipantOfferCommercialPrintForm$Params {
    if (!params) {
      return {} as ParticipantOfferCommercialPrintForm$Params;
    }
    return {
      id: params.id,
    };
  }
};

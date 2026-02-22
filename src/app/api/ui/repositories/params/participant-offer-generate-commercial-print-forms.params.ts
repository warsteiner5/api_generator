import { ParticipantOfferGenerateCommercialPrintForms$Params } from '../../../swagger/fn/participant-offer/participant-offer-generate-commercial-print-forms';

// @ts-ignore
export interface ParticipantOfferGenerateCommercialPrintFormsParams {
  body?: number[];
}

export function participantOfferGenerateCommercialPrintFormsAdapter(params?: ParticipantOfferGenerateCommercialPrintFormsParams): ParticipantOfferGenerateCommercialPrintForms$Params {
  if (!params) {
    return {} as ParticipantOfferGenerateCommercialPrintForms$Params;
  }
  return {
      body: params.body,
  };
}

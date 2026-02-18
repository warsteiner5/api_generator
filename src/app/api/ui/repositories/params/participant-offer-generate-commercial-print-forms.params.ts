import { ParticipantOfferGenerateCommercialPrintForms$Params } from '../../../swagger/fn/participant-offer/participant-offer-generate-commercial-print-forms';

export interface ParticipantOfferGenerateCommercialPrintFormsParams {
  body?: number[];
}

export const participantOfferGenerateCommercialPrintFormsParamsAdapter = {
  adapt(params?: ParticipantOfferGenerateCommercialPrintFormsParams): ParticipantOfferGenerateCommercialPrintForms$Params {
    if (!params) {
      return {} as ParticipantOfferGenerateCommercialPrintForms$Params;
    }
    return {
      body: params.body,
    };
  }
};

import { ParticipantOffer } from '../../models/participant-offer.interface';
import { ParticipantOfferValidateAndGenerateCommercialPrintForm$Params } from '../../../swagger/fn/participant-offer/participant-offer-validate-and-generate-commercial-print-form';
import { apiParticipantOfferDtoAdapter } from '../../adapters/models/api-participant-offer-dto.adapter';

// @ts-ignore
export interface ParticipantOfferValidateAndGenerateCommercialPrintFormParams {
  body?: ParticipantOffer;
}

export function participantOfferValidateAndGenerateCommercialPrintFormAdapter(params?: ParticipantOfferValidateAndGenerateCommercialPrintFormParams): ParticipantOfferValidateAndGenerateCommercialPrintForm$Params {
  if (!params) {
    return {} as ParticipantOfferValidateAndGenerateCommercialPrintForm$Params;
  }
  return {
      body: apiParticipantOfferDtoAdapter(params.body),
  };
}

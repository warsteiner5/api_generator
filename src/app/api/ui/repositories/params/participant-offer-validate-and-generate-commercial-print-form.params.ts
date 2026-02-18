import { ParticipantOffer } from '../../models/participant-offer.interface';
import { ParticipantOfferValidateAndGenerateCommercialPrintForm$Params } from '../../../swagger/fn/participant-offer/participant-offer-validate-and-generate-commercial-print-form';
import { adaptApiParticipantOfferDto } from '../../adapters/toDto/api-participant-offer-dto.adapter';

export interface ParticipantOfferValidateAndGenerateCommercialPrintFormParams {
  body?: ParticipantOffer;
}

export const participantOfferValidateAndGenerateCommercialPrintFormParamsAdapter = {
  adapt(params?: ParticipantOfferValidateAndGenerateCommercialPrintFormParams): ParticipantOfferValidateAndGenerateCommercialPrintForm$Params {
    if (!params) {
      return {} as ParticipantOfferValidateAndGenerateCommercialPrintForm$Params;
    }
    return {
      body: adaptApiParticipantOfferDto(params.body),
    };
  }
};

import { ParticipantOfferGetTemplateForExcelDocument$Params } from '../../../swagger/fn/participant-offer/participant-offer-get-template-for-excel-document';
import { ParticipantOfferTypeEnum } from '../../enums/participant-offer-type.enum';
import { adaptApiParticipantOfferTypeEnum } from '../../adapters/toDto/api-participant-offer-type-enum.adapter';

export interface ParticipantOfferGetTemplateForExcelDocumentParams {
  type: ParticipantOfferTypeEnum;
}

export const participantOfferGetTemplateForExcelDocumentParamsAdapter = {
  adapt(params?: ParticipantOfferGetTemplateForExcelDocumentParams): ParticipantOfferGetTemplateForExcelDocument$Params {
    if (!params) {
      return {} as ParticipantOfferGetTemplateForExcelDocument$Params;
    }
    return {
      type: adaptApiParticipantOfferTypeEnum(params.type),
    };
  }
};

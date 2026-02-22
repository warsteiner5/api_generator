import { ParticipantOfferGetTemplateForExcelDocument$Params } from '../../../swagger/fn/participant-offer/participant-offer-get-template-for-excel-document';
import { ParticipantOfferTypeEnum } from '../../enums/participant-offer-type.enum';
import { apiParticipantOfferTypeEnumAdapter } from '../../adapters/enums/api-participant-offer-type-enum.adapter';

// @ts-ignore
export interface ParticipantOfferGetTemplateForExcelDocumentParams {
  type: ParticipantOfferTypeEnum;
}

export function participantOfferGetTemplateForExcelDocumentAdapter(params?: ParticipantOfferGetTemplateForExcelDocumentParams): ParticipantOfferGetTemplateForExcelDocument$Params {
  if (!params) {
    return {} as ParticipantOfferGetTemplateForExcelDocument$Params;
  }
  return {
      type: apiParticipantOfferTypeEnumAdapter(params.type),
  };
}

import { ParticipantOfferDocumentTypeEnum } from '../enums/participant-offer-document-type.enum';

export interface ParticipantOfferDocument {
  fileName: string;
  fileSize: number;
  id: string;
  participantOfferDocumentType: ParticipantOfferDocumentTypeEnum;
}

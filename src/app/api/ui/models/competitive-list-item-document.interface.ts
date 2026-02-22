import { ParticipantOfferDocumentTypeEnum } from '../enums/participant-offer-document-type.enum';

// @ts-ignore
export interface CompetitiveListItemDocument {
  fileName: string;
  fileSize: number;
  id: string;
  participantOfferDocumentType: ParticipantOfferDocumentTypeEnum;
}

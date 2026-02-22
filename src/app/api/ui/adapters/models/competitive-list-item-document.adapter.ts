import { ApiCompetitiveListItemDocumentDto } from '../../../swagger/models/api-competitive-list-item-document-dto';
import { CompetitiveListItemDocument } from '../../models/competitive-list-item-document.interface';
import { participantOfferDocumentTypeEnumAdapter } from '../enums/participant-offer-document-type-enum.adapter';

export const competitiveListItemDocumentAdapter = (source?: ApiCompetitiveListItemDocumentDto | null): CompetitiveListItemDocument => {
  return {
    fileName: source?.FileName,
    fileSize: source?.FileSize,
    id: source?.Id,
    participantOfferDocumentType: source?.ParticipantOfferDocumentType === null ? undefined : participantOfferDocumentTypeEnumAdapter(source?.ParticipantOfferDocumentType),
  };
}

import { ApiCompetitiveListItemDocumentDto } from '../../../swagger/models/api-competitive-list-item-document-dto';
import { CompetitiveListItemDocument } from '../../models/competitive-list-item-document.interface';
import { adaptParticipantOfferDocumentTypeEnumToUI } from './participant-offer-document-type-enum.adapter';

export function adaptCompetitiveListItemDocumentToUI(source?: ApiCompetitiveListItemDocumentDto | null): CompetitiveListItemDocument {
  return {
    fileName: source?.FileName ?? '',
    fileSize: source?.FileSize ?? 0,
    id: source?.Id ?? '',
    participantOfferDocumentType: adaptParticipantOfferDocumentTypeEnumToUI(source?.ParticipantOfferDocumentType),
  };
}

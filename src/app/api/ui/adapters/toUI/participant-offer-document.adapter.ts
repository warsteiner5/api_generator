import { ApiParticipantOfferDocumentDto } from '../../../swagger/models/api-participant-offer-document-dto';
import { ParticipantOfferDocument } from '../../models/participant-offer-document.interface';
import { adaptParticipantOfferDocumentTypeEnumToUI } from './participant-offer-document-type-enum.adapter';

export function adaptParticipantOfferDocumentToUI(source?: ApiParticipantOfferDocumentDto | null): ParticipantOfferDocument {
  return {
    fileName: source?.FileName ?? '',
    fileSize: source?.FileSize ?? 0,
    id: source?.Id ?? '',
    participantOfferDocumentType: adaptParticipantOfferDocumentTypeEnumToUI(source?.ParticipantOfferDocumentType),
  };
}

import { ApiParticipantOfferDocumentDto } from '../../../swagger/models/api-participant-offer-document-dto';
import { ParticipantOfferDocument } from '../../models/participant-offer-document.interface';
import { participantOfferDocumentTypeEnumAdapter } from '../enums/participant-offer-document-type-enum.adapter';

export const participantOfferDocumentAdapter = (source?: ApiParticipantOfferDocumentDto | null): ParticipantOfferDocument => {
  return {
    fileName: source?.FileName,
    fileSize: source?.FileSize,
    id: source?.Id,
    participantOfferDocumentType: source?.ParticipantOfferDocumentType === null ? undefined : participantOfferDocumentTypeEnumAdapter(source?.ParticipantOfferDocumentType),
  };
}

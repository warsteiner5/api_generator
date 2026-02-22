import { ParticipantOfferDocument } from '../../models/participant-offer-document.interface';
import { ApiParticipantOfferDocumentDto } from '../../../swagger/models/api-participant-offer-document-dto';
import { apiParticipantOfferDocumentTypeEnumAdapter } from '../enums/api-participant-offer-document-type-enum.adapter';

export const apiParticipantOfferDocumentDtoAdapter = (source?: ParticipantOfferDocument | null): ApiParticipantOfferDocumentDto => {
  return {
    FileName: source?.fileName,
    FileSize: source?.fileSize,
    Id: source?.id,
    ParticipantOfferDocumentType: source?.participantOfferDocumentType === null ? undefined : apiParticipantOfferDocumentTypeEnumAdapter(source?.participantOfferDocumentType),
  };
}

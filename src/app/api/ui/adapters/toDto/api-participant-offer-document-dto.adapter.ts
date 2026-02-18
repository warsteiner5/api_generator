import { ParticipantOfferDocument } from '../../models/participant-offer-document.interface';
import { ApiParticipantOfferDocumentDto } from '../../../swagger/models/api-participant-offer-document-dto';
import { adaptApiParticipantOfferDocumentTypeEnum } from './api-participant-offer-document-type-enum.adapter';

export function adaptApiParticipantOfferDocumentDto(source?: ParticipantOfferDocument | null): ApiParticipantOfferDocumentDto {
  return {
    FileName: source?.fileName,
    FileSize: source?.fileSize,
    Id: source?.id,
    ParticipantOfferDocumentType: adaptApiParticipantOfferDocumentTypeEnum(source?.participantOfferDocumentType),
  };
}

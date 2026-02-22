import { CompetitiveListItemDocument } from '../../models/competitive-list-item-document.interface';
import { ApiCompetitiveListItemDocumentDto } from '../../../swagger/models/api-competitive-list-item-document-dto';
import { apiParticipantOfferDocumentTypeEnumAdapter } from '../enums/api-participant-offer-document-type-enum.adapter';

export const apiCompetitiveListItemDocumentDtoAdapter = (source?: CompetitiveListItemDocument | null): ApiCompetitiveListItemDocumentDto => {
  return {
    FileName: source?.fileName,
    FileSize: source?.fileSize,
    Id: source?.id,
    ParticipantOfferDocumentType: source?.participantOfferDocumentType === null ? undefined : apiParticipantOfferDocumentTypeEnumAdapter(source?.participantOfferDocumentType),
  };
}

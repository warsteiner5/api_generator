import { CompetitiveListItemDocument } from '../../models/competitive-list-item-document.interface';
import { ApiCompetitiveListItemDocumentDto } from '../../../swagger/models/api-competitive-list-item-document-dto';
import { adaptApiParticipantOfferDocumentTypeEnum } from './api-participant-offer-document-type-enum.adapter';

export function adaptApiCompetitiveListItemDocumentDto(source?: CompetitiveListItemDocument | null): ApiCompetitiveListItemDocumentDto {
  return {
    FileName: source?.fileName,
    FileSize: source?.fileSize,
    Id: source?.id,
    ParticipantOfferDocumentType: adaptApiParticipantOfferDocumentTypeEnum(source?.participantOfferDocumentType),
  };
}

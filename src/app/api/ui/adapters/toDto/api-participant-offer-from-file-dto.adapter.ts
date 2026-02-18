import { ParticipantOfferFromFile } from '../../models/participant-offer-from-file.interface';
import { ApiParticipantOfferFromFileDto } from '../../../swagger/models/api-participant-offer-from-file-dto';
import { adaptApiParticipantOfferSourceEnum } from './api-participant-offer-source-enum.adapter';

export function adaptApiParticipantOfferFromFileDto(source?: ParticipantOfferFromFile | null): ApiParticipantOfferFromFileDto {
  return {
    FileGuid: source?.fileGuid,
    Source: adaptApiParticipantOfferSourceEnum(source?.source),
  };
}

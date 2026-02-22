import { ParticipantOfferFromFile } from '../../models/participant-offer-from-file.interface';
import { ApiParticipantOfferFromFileDto } from '../../../swagger/models/api-participant-offer-from-file-dto';
import { apiParticipantOfferSourceEnumAdapter } from '../enums/api-participant-offer-source-enum.adapter';

export const apiParticipantOfferFromFileDtoAdapter = (source?: ParticipantOfferFromFile | null): ApiParticipantOfferFromFileDto => {
  return {
    FileGuid: source?.fileGuid,
    Source: source?.source === null ? undefined : apiParticipantOfferSourceEnumAdapter(source?.source),
  };
}

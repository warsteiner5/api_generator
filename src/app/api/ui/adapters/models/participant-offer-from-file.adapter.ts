import { ApiParticipantOfferFromFileDto } from '../../../swagger/models/api-participant-offer-from-file-dto';
import { ParticipantOfferFromFile } from '../../models/participant-offer-from-file.interface';
import { participantOfferSourceEnumAdapter } from '../enums/participant-offer-source-enum.adapter';

export const participantOfferFromFileAdapter = (source?: ApiParticipantOfferFromFileDto | null): ParticipantOfferFromFile => {
  return {
    fileGuid: source?.FileGuid,
    source: source?.Source === null ? undefined : participantOfferSourceEnumAdapter(source?.Source),
  };
}

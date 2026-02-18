import { ApiParticipantOfferFromFileDto } from '../../../swagger/models/api-participant-offer-from-file-dto';
import { ParticipantOfferFromFile } from '../../models/participant-offer-from-file.interface';
import { adaptParticipantOfferSourceEnumToUI } from './participant-offer-source-enum.adapter';

export function adaptParticipantOfferFromFileToUI(source?: ApiParticipantOfferFromFileDto | null): ParticipantOfferFromFile {
  return {
    fileGuid: source?.FileGuid ?? '',
    source: adaptParticipantOfferSourceEnumToUI(source?.Source),
  };
}

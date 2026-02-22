import { ParticipantInfo } from '../../models/participant-info.interface';
import { ApiParticipantInfoDto } from '../../../swagger/models/api-participant-info-dto';

export const apiParticipantInfoDtoAdapter = (source?: ParticipantInfo | null): ApiParticipantInfoDto => {
  return {
    Address: source?.address,
    Email: source?.email,
    Inn: source?.inn,
    IsSMP: source?.isSMP,
    Kpp: source?.kpp,
    Ogrn: source?.ogrn,
    PhoneNumber: source?.phoneNumber,
    PostAddress: source?.postAddress,
    Source: source?.source,
    Unp: source?.unp,
  };
}

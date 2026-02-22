import { ApiParticipantInfoDto } from '../../../swagger/models/api-participant-info-dto';
import { ParticipantInfo } from '../../models/participant-info.interface';

export const participantInfoAdapter = (source?: ApiParticipantInfoDto | null): ParticipantInfo => {
  return {
    address: source?.Address,
    email: source?.Email,
    inn: source?.Inn,
    isSMP: source?.IsSMP,
    kpp: source?.Kpp,
    ogrn: source?.Ogrn,
    phoneNumber: source?.PhoneNumber,
    postAddress: source?.PostAddress,
    source: source?.Source,
    unp: source?.Unp,
  };
}

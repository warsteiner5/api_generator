import { ApiParticipantInfoDto } from '../../../swagger/models/api-participant-info-dto';
import { ParticipantInfo } from '../../models/participant-info.interface';

export function adaptParticipantInfoToUI(source?: ApiParticipantInfoDto | null): ParticipantInfo {
  return {
    address: source?.Address ?? '',
    email: source?.Email ?? '',
    inn: source?.Inn ?? '',
    isSMP: source?.IsSMP ?? false,
    kpp: source?.Kpp ?? '',
    ogrn: source?.Ogrn ?? '',
    phoneNumber: source?.PhoneNumber ?? '',
    postAddress: source?.PostAddress ?? '',
    source: source?.Source ?? 0,
    unp: source?.Unp ?? '',
  };
}

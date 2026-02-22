import { NicRegistryParticipantInfo } from '../../models/nic-registry-participant-info.interface';
import { ApiNicRegistryParticipantInfoDto } from '../../../swagger/models/api-nic-registry-participant-info-dto';

export const apiNicRegistryParticipantInfoDtoAdapter = (source?: NicRegistryParticipantInfo | null): ApiNicRegistryParticipantInfoDto => {
  return {
    ContractDate: source?.contractDate,
    ContractNumber: source?.contractNumber,
    Email: source?.email,
    Id: source?.id,
    Inn: source?.inn,
    Kpp: source?.kpp,
    Name: source?.name,
  };
}

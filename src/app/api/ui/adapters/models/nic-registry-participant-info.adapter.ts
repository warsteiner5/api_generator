import { ApiNicRegistryParticipantInfoDto } from '../../../swagger/models/api-nic-registry-participant-info-dto';
import { NicRegistryParticipantInfo } from '../../models/nic-registry-participant-info.interface';

export const nicRegistryParticipantInfoAdapter = (source?: ApiNicRegistryParticipantInfoDto | null): NicRegistryParticipantInfo => {
  return {
    contractDate: source?.ContractDate,
    contractNumber: source?.ContractNumber,
    email: source?.Email,
    id: source?.Id,
    inn: source?.Inn,
    kpp: source?.Kpp,
    name: source?.Name,
  };
}

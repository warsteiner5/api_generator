import { NicRegistryEntry } from '../../models/nic-registry-entry.interface';
import { ApiNicRegistryEntryDto } from '../../../swagger/models/api-nic-registry-entry-dto';
import { apiNicRegistryParticipantInfoDtoAdapter } from './api-nic-registry-participant-info-dto.adapter';

export const apiNicRegistryEntryDtoAdapter = (source?: NicRegistryEntry | null): ApiNicRegistryEntryDto => {
  return {
    ContractDate: source?.contractDate,
    ContractNumber: source?.contractNumber,
    CreateDate: source?.createDate,
    CustomerInn: source?.customerInn,
    CustomerKpp: source?.customerKpp,
    CustomerName: source?.customerName,
    Id: source?.id,
    ParticipantEmail: source?.participantEmail,
    ParticipantId: source?.participantId,
    ParticipantInn: source?.participantInn,
    ParticipantKpp: source?.participantKpp,
    ParticipantName: source?.participantName,
    ReasonForAdding: source?.reasonForAdding,
    ResponsibleEmail: source?.responsibleEmail,
    ResponsibleFullName: source?.responsibleFullName,
    ResponsiblePhoneNumber: source?.responsiblePhoneNumber,
    TenantName: source?.tenantName,
    TradeId: source?.tradeId,
    TradeName: source?.tradeName,
    Winners: source?.winners?.map((item) => apiNicRegistryParticipantInfoDtoAdapter(item)),
  };
}

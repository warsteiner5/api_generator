import { ApiNicRegistryEntryDto } from '../../../swagger/models/api-nic-registry-entry-dto';
import { NicRegistryEntry } from '../../models/nic-registry-entry.interface';
import { adaptNicRegistryParticipantInfoToUI } from './nic-registry-participant-info.adapter';

export function adaptNicRegistryEntryToUI(source?: ApiNicRegistryEntryDto | null): NicRegistryEntry {
  return {
    contractDate: source?.ContractDate ?? '',
    contractNumber: source?.ContractNumber ?? '',
    createDate: source?.CreateDate ?? '',
    customerInn: source?.CustomerInn ?? '',
    customerKpp: source?.CustomerKpp ?? '',
    customerName: source?.CustomerName ?? '',
    id: source?.Id ?? 0,
    participantEmail: source?.ParticipantEmail ?? '',
    participantId: source?.ParticipantId ?? 0,
    participantInn: source?.ParticipantInn ?? '',
    participantKpp: source?.ParticipantKpp ?? '',
    participantName: source?.ParticipantName ?? '',
    reasonForAdding: source?.ReasonForAdding ?? '',
    responsibleEmail: source?.ResponsibleEmail ?? '',
    responsibleFullName: source?.ResponsibleFullName ?? '',
    responsiblePhoneNumber: source?.ResponsiblePhoneNumber ?? '',
    tenantName: source?.TenantName ?? '',
    tradeId: source?.TradeId ?? 0,
    tradeName: source?.TradeName ?? '',
    winners: (source?.Winners ?? []).map((item) => adaptNicRegistryParticipantInfoToUI(item)),
  };
}

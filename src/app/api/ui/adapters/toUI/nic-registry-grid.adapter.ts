import { ApiNicRegistryGridDto } from '../../../swagger/models/api-nic-registry-grid-dto';
import { NicRegistryGrid } from '../../models/nic-registry-grid.interface';

export function adaptNicRegistryGridToUI(source?: ApiNicRegistryGridDto | null): NicRegistryGrid {
  return {
    contractDate: source?.ContractDate ?? '',
    contractNumber: source?.ContractNumber ?? '',
    createDate: source?.CreateDate ?? '',
    customerInn: source?.CustomerInn ?? '',
    customerKpp: source?.CustomerKpp ?? '',
    customerName: source?.CustomerName ?? '',
    id: source?.Id ?? 0,
    isAvailableForCurrentOrganization: source?.IsAvailableForCurrentOrganization ?? false,
    participantEmail: source?.ParticipantEmail ?? '',
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
  };
}

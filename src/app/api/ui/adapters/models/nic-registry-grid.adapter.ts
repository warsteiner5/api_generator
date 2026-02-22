import { ApiNicRegistryGridDto } from '../../../swagger/models/api-nic-registry-grid-dto';
import { NicRegistryGrid } from '../../models/nic-registry-grid.interface';

export const nicRegistryGridAdapter = (source?: ApiNicRegistryGridDto | null): NicRegistryGrid => {
  return {
    contractDate: source?.ContractDate,
    contractNumber: source?.ContractNumber,
    createDate: source?.CreateDate,
    customerInn: source?.CustomerInn,
    customerKpp: source?.CustomerKpp,
    customerName: source?.CustomerName,
    id: source?.Id,
    isAvailableForCurrentOrganization: source?.IsAvailableForCurrentOrganization,
    participantEmail: source?.ParticipantEmail,
    participantInn: source?.ParticipantInn,
    participantKpp: source?.ParticipantKpp,
    participantName: source?.ParticipantName,
    reasonForAdding: source?.ReasonForAdding,
    responsibleEmail: source?.ResponsibleEmail,
    responsibleFullName: source?.ResponsibleFullName,
    responsiblePhoneNumber: source?.ResponsiblePhoneNumber,
    tenantName: source?.TenantName,
    tradeId: source?.TradeId,
    tradeName: source?.TradeName,
  };
}

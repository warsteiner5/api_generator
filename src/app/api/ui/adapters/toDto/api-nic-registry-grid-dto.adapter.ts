import { NicRegistryGrid } from '../../models/nic-registry-grid.interface';
import { ApiNicRegistryGridDto } from '../../../swagger/models/api-nic-registry-grid-dto';

export function adaptApiNicRegistryGridDto(source?: NicRegistryGrid | null): ApiNicRegistryGridDto {
  return {
    ContractDate: source?.contractDate,
    ContractNumber: source?.contractNumber,
    CreateDate: source?.createDate,
    CustomerInn: source?.customerInn,
    CustomerKpp: source?.customerKpp,
    CustomerName: source?.customerName,
    Id: source?.id,
    IsAvailableForCurrentOrganization: source?.isAvailableForCurrentOrganization,
    ParticipantEmail: source?.participantEmail,
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
  };
}

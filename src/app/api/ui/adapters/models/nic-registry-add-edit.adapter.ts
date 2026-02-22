import { ApiNicRegistryAddEditDto } from '../../../swagger/models/api-nic-registry-add-edit-dto';
import { NicRegistryAddEdit } from '../../models/nic-registry-add-edit.interface';

export const nicRegistryAddEditAdapter = (source?: ApiNicRegistryAddEditDto | null): NicRegistryAddEdit => {
  return {
    contractDate: source?.ContractDate,
    contractNumber: source?.ContractNumber,
    id: source?.Id,
    isAgreementAccepted: source?.IsAgreementAccepted,
    participantEmail: source?.ParticipantEmail,
    participantId: source?.ParticipantId,
    reasonForAdding: source?.ReasonForAdding,
    responsibleEmail: source?.ResponsibleEmail,
    responsibleFullName: source?.ResponsibleFullName,
    responsiblePhoneNumber: source?.ResponsiblePhoneNumber,
    tenantId: source?.TenantId,
    tradeId: source?.TradeId,
  };
}

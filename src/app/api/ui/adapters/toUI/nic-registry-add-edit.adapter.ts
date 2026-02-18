import { ApiNicRegistryAddEditDto } from '../../../swagger/models/api-nic-registry-add-edit-dto';
import { NicRegistryAddEdit } from '../../models/nic-registry-add-edit.interface';

export function adaptNicRegistryAddEditToUI(source?: ApiNicRegistryAddEditDto | null): NicRegistryAddEdit {
  return {
    contractDate: source?.ContractDate ?? '',
    contractNumber: source?.ContractNumber ?? '',
    id: source?.Id ?? 0,
    isAgreementAccepted: source?.IsAgreementAccepted ?? false,
    participantEmail: source?.ParticipantEmail ?? '',
    participantId: source?.ParticipantId ?? 0,
    reasonForAdding: source?.ReasonForAdding ?? '',
    responsibleEmail: source?.ResponsibleEmail ?? '',
    responsibleFullName: source?.ResponsibleFullName ?? '',
    responsiblePhoneNumber: source?.ResponsiblePhoneNumber ?? '',
    tenantId: source?.TenantId ?? 0,
    tradeId: source?.TradeId ?? 0,
  };
}

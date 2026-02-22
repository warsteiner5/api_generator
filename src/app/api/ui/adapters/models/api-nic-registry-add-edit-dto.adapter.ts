import { NicRegistryAddEdit } from '../../models/nic-registry-add-edit.interface';
import { ApiNicRegistryAddEditDto } from '../../../swagger/models/api-nic-registry-add-edit-dto';

export const apiNicRegistryAddEditDtoAdapter = (source?: NicRegistryAddEdit | null): ApiNicRegistryAddEditDto => {
  return {
    ContractDate: source?.contractDate,
    ContractNumber: source?.contractNumber,
    Id: source?.id,
    IsAgreementAccepted: source?.isAgreementAccepted,
    ParticipantEmail: source?.participantEmail,
    ParticipantId: source?.participantId,
    ReasonForAdding: source?.reasonForAdding,
    ResponsibleEmail: source?.responsibleEmail,
    ResponsibleFullName: source?.responsibleFullName,
    ResponsiblePhoneNumber: source?.responsiblePhoneNumber,
    TenantId: source?.tenantId,
    TradeId: source?.tradeId,
  };
}

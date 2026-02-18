import { ApiAdditionalAgreementDto } from '../../../swagger/models/api-additional-agreement-dto';
import { AdditionalAgreement } from '../../models/additional-agreement.interface';
import { adaptAdditionalAgreementDocumentToUI } from './additional-agreement-document.adapter';
import { adaptAdditionalAgreementFormEnumToUI } from './additional-agreement-form-enum.adapter';
import { adaptAdditionalAgreementInitiatorEnumToUI } from './additional-agreement-initiator-enum.adapter';
import { adaptAdditionalAgreementStateEnumToUI } from './additional-agreement-state-enum.adapter';

export function adaptAdditionalAgreementToUI(source?: ApiAdditionalAgreementDto | null): AdditionalAgreement {
  return {
    conclusionDate: source?.ConclusionDate ?? '',
    createDate: source?.CreateDate ?? '',
    currentOrganizationId: source?.CurrentOrganizationId ?? 0,
    dealId: source?.DealId ?? 0,
    documents: (source?.Documents ?? []).map((item) => adaptAdditionalAgreementDocumentToUI(item)),
    id: source?.Id ?? 0,
    initiatorOrganizationId: source?.InitiatorOrganizationId ?? 0,
    initiatorType: adaptAdditionalAgreementInitiatorEnumToUI(source?.InitiatorType),
    number: source?.Number ?? '',
    rejectReason: source?.RejectReason ?? '',
    sentDate: source?.SentDate ?? '',
    signByInitiatorDate: source?.SignByInitiatorDate ?? '',
    signDate: source?.SignDate ?? '',
    state: adaptAdditionalAgreementStateEnumToUI(source?.State),
    type: adaptAdditionalAgreementFormEnumToUI(source?.Type),
  };
}

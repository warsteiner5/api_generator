import { ApiAdditionalAgreementDto } from '../../../swagger/models/api-additional-agreement-dto';
import { AdditionalAgreement } from '../../models/additional-agreement.interface';
import { additionalAgreementDocumentAdapter } from './additional-agreement-document.adapter';
import { additionalAgreementFormEnumAdapter } from '../enums/additional-agreement-form-enum.adapter';
import { additionalAgreementInitiatorEnumAdapter } from '../enums/additional-agreement-initiator-enum.adapter';
import { additionalAgreementStateEnumAdapter } from '../enums/additional-agreement-state-enum.adapter';

export const additionalAgreementAdapter = (source?: ApiAdditionalAgreementDto | null): AdditionalAgreement => {
  return {
    conclusionDate: source?.ConclusionDate,
    createDate: source?.CreateDate,
    currentOrganizationId: source?.CurrentOrganizationId,
    dealId: source?.DealId,
    documents: source?.Documents?.map((item) => additionalAgreementDocumentAdapter(item)),
    id: source?.Id,
    initiatorOrganizationId: source?.InitiatorOrganizationId,
    initiatorType: source?.InitiatorType === null ? undefined : additionalAgreementInitiatorEnumAdapter(source?.InitiatorType),
    number: source?.Number,
    rejectReason: source?.RejectReason,
    sentDate: source?.SentDate,
    signByInitiatorDate: source?.SignByInitiatorDate,
    signDate: source?.SignDate,
    state: source?.State === null ? undefined : additionalAgreementStateEnumAdapter(source?.State),
    type: source?.Type === null ? undefined : additionalAgreementFormEnumAdapter(source?.Type),
  };
}

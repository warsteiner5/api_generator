import { AdditionalAgreement } from '../../models/additional-agreement.interface';
import { ApiAdditionalAgreementDto } from '../../../swagger/models/api-additional-agreement-dto';
import { apiAdditionalAgreementDocumentDtoAdapter } from './api-additional-agreement-document-dto.adapter';
import { apiAdditionalAgreementFormEnumAdapter } from '../enums/api-additional-agreement-form-enum.adapter';
import { apiAdditionalAgreementInitiatorEnumAdapter } from '../enums/api-additional-agreement-initiator-enum.adapter';
import { apiAdditionalAgreementStateEnumAdapter } from '../enums/api-additional-agreement-state-enum.adapter';

export const apiAdditionalAgreementDtoAdapter = (source?: AdditionalAgreement | null): ApiAdditionalAgreementDto => {
  return {
    ConclusionDate: source?.conclusionDate,
    CreateDate: source?.createDate,
    CurrentOrganizationId: source?.currentOrganizationId,
    DealId: source?.dealId,
    Documents: source?.documents?.map((item) => apiAdditionalAgreementDocumentDtoAdapter(item)),
    Id: source?.id,
    InitiatorOrganizationId: source?.initiatorOrganizationId,
    InitiatorType: source?.initiatorType === null ? undefined : apiAdditionalAgreementInitiatorEnumAdapter(source?.initiatorType),
    Number: source?.number,
    RejectReason: source?.rejectReason,
    SentDate: source?.sentDate,
    SignByInitiatorDate: source?.signByInitiatorDate,
    SignDate: source?.signDate,
    State: source?.state === null ? undefined : apiAdditionalAgreementStateEnumAdapter(source?.state),
    Type: source?.type === null ? undefined : apiAdditionalAgreementFormEnumAdapter(source?.type),
  };
}

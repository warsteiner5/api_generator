import { AdditionalAgreement } from '../../models/additional-agreement.interface';
import { ApiAdditionalAgreementDto } from '../../../swagger/models/api-additional-agreement-dto';
import { adaptApiAdditionalAgreementDocumentDto } from './api-additional-agreement-document-dto.adapter';
import { adaptApiAdditionalAgreementFormEnum } from './api-additional-agreement-form-enum.adapter';
import { adaptApiAdditionalAgreementInitiatorEnum } from './api-additional-agreement-initiator-enum.adapter';
import { adaptApiAdditionalAgreementStateEnum } from './api-additional-agreement-state-enum.adapter';

export function adaptApiAdditionalAgreementDto(source?: AdditionalAgreement | null): ApiAdditionalAgreementDto {
  return {
    ConclusionDate: source?.conclusionDate,
    CreateDate: source?.createDate,
    CurrentOrganizationId: source?.currentOrganizationId,
    DealId: source?.dealId,
    Documents: (source?.documents ?? []).map((item) => adaptApiAdditionalAgreementDocumentDto(item)),
    Id: source?.id,
    InitiatorOrganizationId: source?.initiatorOrganizationId,
    InitiatorType: adaptApiAdditionalAgreementInitiatorEnum(source?.initiatorType),
    Number: source?.number,
    RejectReason: source?.rejectReason,
    SentDate: source?.sentDate,
    SignByInitiatorDate: source?.signByInitiatorDate,
    SignDate: source?.signDate,
    State: adaptApiAdditionalAgreementStateEnum(source?.state),
    Type: adaptApiAdditionalAgreementFormEnum(source?.type),
  };
}

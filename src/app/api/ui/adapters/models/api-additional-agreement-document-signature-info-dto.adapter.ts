import { AdditionalAgreementDocumentSignatureInfo } from '../../models/additional-agreement-document-signature-info.interface';
import { ApiAdditionalAgreementDocumentSignatureInfoDto } from '../../../swagger/models/api-additional-agreement-document-signature-info-dto';
import { apiAdditionalAgreementInitiatorEnumAdapter } from '../enums/api-additional-agreement-initiator-enum.adapter';

export const apiAdditionalAgreementDocumentSignatureInfoDtoAdapter = (source?: AdditionalAgreementDocumentSignatureInfo | null): ApiAdditionalAgreementDocumentSignatureInfoDto => {
  return {
    AdditionalAgreementId: source?.additionalAgreementId,
    FileGuid: source?.fileGuid,
    Participant: source?.participant === null ? undefined : apiAdditionalAgreementInitiatorEnumAdapter(source?.participant),
  };
}

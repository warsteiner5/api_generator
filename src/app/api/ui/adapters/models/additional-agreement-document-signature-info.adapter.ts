import { ApiAdditionalAgreementDocumentSignatureInfoDto } from '../../../swagger/models/api-additional-agreement-document-signature-info-dto';
import { AdditionalAgreementDocumentSignatureInfo } from '../../models/additional-agreement-document-signature-info.interface';
import { additionalAgreementInitiatorEnumAdapter } from '../enums/additional-agreement-initiator-enum.adapter';

export const additionalAgreementDocumentSignatureInfoAdapter = (source?: ApiAdditionalAgreementDocumentSignatureInfoDto | null): AdditionalAgreementDocumentSignatureInfo => {
  return {
    additionalAgreementId: source?.AdditionalAgreementId,
    fileGuid: source?.FileGuid,
    participant: source?.Participant === null ? undefined : additionalAgreementInitiatorEnumAdapter(source?.Participant),
  };
}

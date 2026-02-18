import { ApiAdditionalAgreementDocumentSignatureInfoDto } from '../../../swagger/models/api-additional-agreement-document-signature-info-dto';
import { AdditionalAgreementDocumentSignatureInfo } from '../../models/additional-agreement-document-signature-info.interface';
import { adaptAdditionalAgreementInitiatorEnumToUI } from './additional-agreement-initiator-enum.adapter';

export function adaptAdditionalAgreementDocumentSignatureInfoToUI(source?: ApiAdditionalAgreementDocumentSignatureInfoDto | null): AdditionalAgreementDocumentSignatureInfo {
  return {
    additionalAgreementId: source?.AdditionalAgreementId ?? 0,
    fileGuid: source?.FileGuid ?? '',
    participant: adaptAdditionalAgreementInitiatorEnumToUI(source?.Participant),
  };
}

import { AdditionalAgreementDocumentSignatureInfo } from '../../models/additional-agreement-document-signature-info.interface';
import { ApiAdditionalAgreementDocumentSignatureInfoDto } from '../../../swagger/models/api-additional-agreement-document-signature-info-dto';
import { adaptApiAdditionalAgreementInitiatorEnum } from './api-additional-agreement-initiator-enum.adapter';

export function adaptApiAdditionalAgreementDocumentSignatureInfoDto(source?: AdditionalAgreementDocumentSignatureInfo | null): ApiAdditionalAgreementDocumentSignatureInfoDto {
  return {
    AdditionalAgreementId: source?.additionalAgreementId,
    FileGuid: source?.fileGuid,
    Participant: adaptApiAdditionalAgreementInitiatorEnum(source?.participant),
  };
}

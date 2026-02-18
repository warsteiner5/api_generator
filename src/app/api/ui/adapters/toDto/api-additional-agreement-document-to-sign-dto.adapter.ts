import { AdditionalAgreementDocumentToSign } from '../../models/additional-agreement-document-to-sign.interface';
import { ApiAdditionalAgreementDocumentToSignDto } from '../../../swagger/models/api-additional-agreement-document-to-sign-dto';

export function adaptApiAdditionalAgreementDocumentToSignDto(source?: AdditionalAgreementDocumentToSign | null): ApiAdditionalAgreementDocumentToSignDto {
  return {
    FileDataToSign: source?.fileDataToSign,
    FileGuid: source?.fileGuid,
    IsHash: source?.isHash,
  };
}

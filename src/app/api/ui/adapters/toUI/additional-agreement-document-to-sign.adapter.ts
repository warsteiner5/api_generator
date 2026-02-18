import { ApiAdditionalAgreementDocumentToSignDto } from '../../../swagger/models/api-additional-agreement-document-to-sign-dto';
import { AdditionalAgreementDocumentToSign } from '../../models/additional-agreement-document-to-sign.interface';

export function adaptAdditionalAgreementDocumentToSignToUI(source?: ApiAdditionalAgreementDocumentToSignDto | null): AdditionalAgreementDocumentToSign {
  return {
    fileDataToSign: source?.FileDataToSign ?? '',
    fileGuid: source?.FileGuid ?? '',
    isHash: source?.IsHash ?? false,
  };
}

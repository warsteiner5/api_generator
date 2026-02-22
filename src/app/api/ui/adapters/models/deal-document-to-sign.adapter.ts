import { ApiDealDocumentToSignDto } from '../../../swagger/models/api-deal-document-to-sign-dto';
import { DealDocumentToSign } from '../../models/deal-document-to-sign.interface';

export const dealDocumentToSignAdapter = (source?: ApiDealDocumentToSignDto | null): DealDocumentToSign => {
  return {
    fileDataToSign: source?.FileDataToSign,
    fileGuid: source?.FileGuid,
    isHash: source?.IsHash,
  };
}

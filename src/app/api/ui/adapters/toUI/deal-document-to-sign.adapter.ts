import { ApiDealDocumentToSignDto } from '../../../swagger/models/api-deal-document-to-sign-dto';
import { DealDocumentToSign } from '../../models/deal-document-to-sign.interface';

export function adaptDealDocumentToSignToUI(source?: ApiDealDocumentToSignDto | null): DealDocumentToSign {
  return {
    fileDataToSign: source?.FileDataToSign ?? '',
    fileGuid: source?.FileGuid ?? '',
    isHash: source?.IsHash ?? false,
  };
}

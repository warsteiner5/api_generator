import { DealDocumentToSign } from '../../models/deal-document-to-sign.interface';
import { ApiDealDocumentToSignDto } from '../../../swagger/models/api-deal-document-to-sign-dto';

export function adaptApiDealDocumentToSignDto(source?: DealDocumentToSign | null): ApiDealDocumentToSignDto {
  return {
    FileDataToSign: source?.fileDataToSign,
    FileGuid: source?.fileGuid,
    IsHash: source?.isHash,
  };
}

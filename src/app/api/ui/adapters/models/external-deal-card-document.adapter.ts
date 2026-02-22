import { ApiExternalDealCardDocumentDto } from '../../../swagger/models/api-external-deal-card-document-dto';
import { ExternalDealCardDocument } from '../../models/external-deal-card-document.interface';

export const externalDealCardDocumentAdapter = (source?: ApiExternalDealCardDocumentDto | null): ExternalDealCardDocument => {
  return {
    fileName: source?.FileName,
    guidId: source?.GuidId,
    id: source?.Id,
    name: source?.Name,
    rowVersion: source?.RowVersion,
    size: source?.Size,
    uploadDate: source?.UploadDate,
  };
}

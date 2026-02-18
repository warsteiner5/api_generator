import { ApiExternalDealCardDocumentDto } from '../../../swagger/models/api-external-deal-card-document-dto';
import { ExternalDealCardDocument } from '../../models/external-deal-card-document.interface';

export function adaptExternalDealCardDocumentToUI(source?: ApiExternalDealCardDocumentDto | null): ExternalDealCardDocument {
  return {
    fileName: source?.FileName ?? '',
    guidId: source?.GuidId ?? '',
    id: source?.Id ?? 0,
    name: source?.Name ?? '',
    rowVersion: source?.RowVersion ?? 0,
    size: source?.Size ?? 0,
    uploadDate: source?.UploadDate ?? '',
  };
}

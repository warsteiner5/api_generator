import { ApiPrivateDocumentDto } from '../../../swagger/models/api-private-document-dto';
import { PrivateDocument } from '../../models/private-document.interface';

export function adaptPrivateDocumentToUI(source?: ApiPrivateDocumentDto | null): PrivateDocument {
  return {
    documentType: source?.DocumentType ?? 0,
    fileGuid: source?.FileGuid ?? '',
    fileName: source?.FileName ?? '',
    fileSize: source?.FileSize ?? 0,
  };
}
